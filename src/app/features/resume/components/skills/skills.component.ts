import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit {
  @Input() skills: any[] = [];
  @Input() clones: any[] = [];

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
          if (entry.isIntersecting) {
            this.skills.forEach((tool) => (tool.rate = this.clones?.find((clone) => clone.name === tool.name).rate));
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
