import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { Skill } from '@core/models/skill.model';
import { ProgressBarModule } from 'primeng/progressbar';
import { PanelModule } from 'primeng/panel';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [PanelModule, ProgressBarModule, SharedModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cv-skills',
  standalone: true,
  styleUrls: ['./skills.component.scss'],
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements AfterViewInit {
  @Input() skills: Skill[] = [];
  @Input() clones: Skill[] = [];
  changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

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
    if (entry.isIntersecting && this.clones.length > 0) {
      this.skills.forEach(
        (tool: Skill) =>
          (tool.rate = this.clones?.find((clone: Skill): boolean => clone.name === tool.name)?.rate || 0),
      );
    } else {
      this.skills.forEach((tool: Skill): number => (tool.rate = 0));
    }
    this.changeDetectorRef.markForCheck();
  }
}
