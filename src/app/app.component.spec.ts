import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GeneralComponent } from '@features/general/components/general/general.component';
import { ChangeDetectorRef, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';

const translateServiceMock = {
  addLangs: jest.fn(),
  use: jest.fn(),
  getBrowserLang: jest.fn().mockReturnValue('fr'),
};
Object.defineProperty(translateServiceMock, 'onLangChange', { get: jest.fn(() => of({ lang: 'en' })) });

@Component({
  selector: 'cv-general',
  standalone: true,
  template: ``,
})
class FakeGeneralComponent {}

@Component({
  selector: 'cv-resume',
  standalone: true,
  template: ``,
})
class FakeResumeComponent {}

describe(AppComponent.name, () => {
  let component: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.overrideComponent(AppComponent, {
      add: {
        providers: [
          { provide: ChangeDetectorRef, useValue: { markForCheck: jest.fn() } },
          { provide: TranslateService, useValue: translateServiceMock },
        ],
        imports: [FakeGeneralComponent, FakeResumeComponent],
        schemas: [NO_ERRORS_SCHEMA],
      },
      remove: {
        imports: [GeneralComponent, ResumeComponent],
      },
    });
    component = TestBed.createComponent(AppComponent);
    component.autoDetectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should process on language selection', async () => {
    const changeDetectorRef = component.componentInstance.changeDetectorRef;
    const spyInstance = jest.spyOn(changeDetectorRef, 'markForCheck');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(spyInstance).toHaveBeenCalled();
  });
});
