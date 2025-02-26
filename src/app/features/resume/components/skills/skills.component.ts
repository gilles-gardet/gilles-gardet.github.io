import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { Skill } from '@core/models/skill.model';
import { PanelModule } from 'primeng/panel';
import { TranslocoDirective } from '@jsverse/transloco';
import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar.component';

@Component({
  imports: [PanelModule, ProgressBarComponent, TranslocoDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cv-skills',
  standalone: true,
  styleUrls: ['./skills.component.scss'],
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements AfterViewInit {
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  protected _skills: Skill[] = [];
  protected _clones: Skill[] = [];

  @Input()
  public get skills(): Skill[] {
    return this._skills;
  }

  public set skills(value: Skill[]) {
    this._skills = value;
    this.changeDetectorRef.markForCheck();
  }

  @Input()
  public get clones(): Skill[] {
    return this._clones;
  }

  public set clones(value: Skill[]) {
    this._clones = value;
    this.changeDetectorRef.markForCheck();
  }

  /**
   * @inheritDoc
   */
  ngAfterViewInit(): void {
    this._animateSkillsOnView();
  }

  /**
   * Animate the skills bar when visible on screen
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
    const rateElement: Element | null = document.querySelector('p-panel#skills .p-component');
    if (rateElement) {
      rateIntersectionObserver.observe(rateElement);
    }
  }

  private _checkSkillIntersection(entry: IntersectionObserverEntry): void {
    if (entry.isIntersecting && this._clones.length > 0) {
      this._skills.forEach(
        (tool: Skill) =>
          (tool.rate = this._clones?.find((clone: Skill): boolean => clone.name === tool.name)?.rate ?? 0),
      );
    } else {
      this._skills.forEach((tool: Skill): number => (tool.rate = 0));
    }
    this.changeDetectorRef.markForCheck();
  }
}
