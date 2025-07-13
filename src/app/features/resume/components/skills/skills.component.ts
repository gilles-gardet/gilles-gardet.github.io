import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnDestroy,
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
export class SkillsComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly store: Store<AppState> = inject(Store);
  protected skills: Skill[] = [];
  protected clones: Skill[] = [];
  private intersectionObserver?: IntersectionObserver;
  private shouldSetupObserver = false;

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
        this.changeDetectorRef.markForCheck();
        this.shouldSetupObserver = true; // mark that we need to set up the observer once DOM is ready
      });
  }

  /**
   * @inheritDoc
   */
  ngAfterViewChecked(): void {
    // setup observer only when data is ready and DOM is fully rendered
    if (this.shouldSetupObserver && !this.intersectionObserver && !!this.clones.length) {
      const skillsElement: Element | null = document.querySelector('cv-panel#skills .skills');
      if (skillsElement) {
        this.shouldSetupObserver = false;
        this._setupIntersectionObserver();
      }
    }
  }

  /**
   * Setup intersection observer to animate skill bars when visible
   */
  private _setupIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry) => this._checkSkillIntersection(entry));
      },
      {
        threshold: 0,
      },
    );
    const skillsElement: Element | null = document.querySelector('cv-panel#skills');
    if (skillsElement && this.intersectionObserver) {
      this.intersectionObserver.observe(skillsElement);
      this._checkInitialVisibility(skillsElement);
    }
  }

  /**
   * Check if the 'skills' element is initially visible and trigger animation
   *
   * @param element the skills panel element
   */
  private _checkInitialVisibility(element: Element): void {
    const rect: globalThis.DOMRect = element.getBoundingClientRect();
    const isVisible: boolean = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible && this.clones.length > 0) {
      this._animateSkills();
    }
  }

  /**
   * Animate skills by setting their rates to the clone values
   */
  private _animateSkills(): void {
    this.skills.forEach((tool: Skill): void => {
      const cloneSkill: Skill | undefined = this.clones?.find((clone: Skill): boolean => clone.name === tool.name);
      tool.rate = cloneSkill ? cloneSkill.rate : 0;
    });
    this.changeDetectorRef.markForCheck();
  }

  /**
   * Check the intersection of the 'skills' bar with the screen and update the rate of each skill.
   *
   * @param entry the intersection observer entry
   */
  private _checkSkillIntersection(entry: IntersectionObserverEntry): void {
    if (entry.isIntersecting && this.clones.length > 0) {
      this._animateSkills();
      return;
    }
    this.skills.forEach((tool: Skill): number => (tool.rate = 0));
    this.changeDetectorRef.markForCheck();
  }

  /**
   * @inheritDoc
   */
  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}
