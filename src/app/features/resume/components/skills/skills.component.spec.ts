import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from '@features/resume/components/skills/skills.component';
import { ProgressBarModule } from 'primeng/progressbar';

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => null,
}));

describe('SkillsComponent', () => {
  let skillsComponent: SkillsComponent;
  let componentFixture: ComponentFixture<SkillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, PanelModule, ProgressBarModule],
    }).compileComponents();
    componentFixture = TestBed.createComponent(SkillsComponent);
    skillsComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async () => {
    expect(skillsComponent).toBeTruthy();
  });

  it('should have an empty array of skills by default', async () => {
    const component = new SkillsComponent();
    expect(component.skills).toStrictEqual([]);
  });

  it('should have an empty array of clones by default', async () => {
    const component = new SkillsComponent();
    expect(component.clones).toStrictEqual([]);
  });
});
