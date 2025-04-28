import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit
} from '@angular/core';
import { Skill } from '@core/models/skill.model';
import { TranslocoDirective } from '@jsverse/transloco';
import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar.component';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { AppState } from '@state/state';
import { Store } from '@ngrx/store';
import { selectSkills } from '@state/skill/skill.selector';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [PanelComponent, ProgressBarComponent, TranslocoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cv-skills',

  styleUrl: './skills.component.scss',
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements AfterViewInit {
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly store: Store<AppState> = inject(Store);
  protected skills: Skill[] = [];
  protected clones: Skill[] = [];

  /**
   * @inheritDoc
   */
  ngAfterViewInit(): void {
    this.store
      .select(selectSkills)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((skills: Skill[]): void => {
        this.skills = this.clones = skills;
        this.skills = skills.map((skill: Skill): Skill => ({ name: skill.name, rate: 0 }));
        setTimeout((): void => this._animateSkillsOnView(), 100); // FIXME: setTimeout is a workaround
        this.changeDetectorRef.markForCheck();
      });
  }

  /**
   * Animate the skill bars when visible on screen
   */
  private _animateSkillsOnView(): void {
    const rateIntersectionObserver: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry) => this._checkSkillIntersection(entry));
      },
      {
        threshold: 0,
      },
    );
    const rateElement: Element | null = document.querySelector('cv-panel#skills');
    if (rateElement) {
      rateIntersectionObserver.observe(rateElement);
    }
  }

  /**
   * Check the intersection of the skills bar with the screen and update the rate of each skill.
   *
   * @param entry the intersection observer entry
   */
  private _checkSkillIntersection(entry: IntersectionObserverEntry): void {
    if (entry.isIntersecting && this.clones.length > 0) {
      this.skills.forEach(
        (tool: Skill) =>
          (tool.rate = this.clones?.find((clone: Skill): boolean => clone.name === tool.name)?.rate ?? 0),
      );
    } else {
      this.skills.forEach((tool: Skill): number => (tool.rate = 0));
    }
    this.changeDetectorRef.markForCheck();
  }
}
