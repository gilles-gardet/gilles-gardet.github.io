import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GeneralComponent } from '@features/general/components/general/general.component';
import { ChangeDetectorRef, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';

const translateServiceMock: unknown = {
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

describe(AppComponent.name, (): void => {
  let component: ComponentFixture<AppComponent>;

  beforeEach((): void => {
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

  it('should create', async (): Promise<void> => {
    expect(component).toBeTruthy();
  });

  it('should process on language selection', async (): Promise<void> => {
    const changeDetectorRef: ChangeDetectorRef = (component.componentInstance as any).changeDetectorRef;
    const spyInstance: unknown = jest.spyOn(changeDetectorRef, 'markForCheck');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(spyInstance).toHaveBeenCalled();
  });
});
