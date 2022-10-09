import { AfterViewInit, Component, Input } from '@angular/core';
import { Skill } from '@core/models/skill.model';
import { ProgressBarModule } from 'primeng/progressbar';
import { PanelModule } from 'primeng/panel';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [PanelModule, ProgressBarModule, SharedModule],
})
export class SkillsComponent implements AfterViewInit {
  @Input() skills: Skill[] = [];
  @Input() clones: Skill[] = [];

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
    const rateIntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting && this.clones.length > 0) {
            this.skills.forEach(
              (tool: Skill) => (tool.rate = this.clones?.find((clone: Skill) => clone.name === tool.name)?.rate!)
            );
          }
        });
      },
      {
        threshold: 0,
      }
    );
    const rateElement = document.querySelector('p-panel[header="Langages et outils"] .p-component');
    if (rateElement) rateIntersectionObserver.observe(rateElement);
  }
}
