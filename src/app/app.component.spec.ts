import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GeneralComponent } from '@features/general/general.component';
import { ChangeDetectorRef, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ResumeComponent } from '@features/resume/resume.component';
import { ThemeService } from '@core/services/theme.service';
import { TranslocoService } from '@jsverse/transloco';
import { Store } from '@ngrx/store';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';

@Component({
  selector: 'cv-general',
  
  template: ``,
})
class FakeGeneralComponent {}

@Component({
  selector: 'cv-resume',
  
  template: ``,
})
class FakeResumeComponent {}

describe(AppComponent.name, (): void => {
  let component: ComponentFixture<AppComponent>;
  const store = createMockStore();

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [
        ...getTranslocoTestProviders(),
      ]
    });
    TestBed.overrideComponent(AppComponent, {
      add: {
        providers: [
          ThemeService,
          { provide: ChangeDetectorRef, useValue: { markForCheck: vi.fn() } },
          { provide: Navigator, useValue: { language: 'en' } },
          {
            provide: TranslocoService,
            useValue: { setActiveLang: vi.fn(), langChanges$: of('fr') },
          },
          {
            provide: Store,
            useValue: store,
          },
        ],
        imports: [FakeGeneralComponent, FakeResumeComponent],
        schemas: [NO_ERRORS_SCHEMA],
      },
      remove: {
        imports: [GeneralComponent, ResumeComponent],
      },
    });
    vi.mocked(store.select).mockReturnValue(of('en'));
    component = TestBed.createComponent(AppComponent);
    component.autoDetectChanges();
  });

  it('should create', async (): Promise<void> => {
    expect(component).toBeTruthy();
  });

  it('should process on language selection', async (): Promise<void> => {
    const changeDetectorRef: ChangeDetectorRef = (component.componentInstance as any).changeDetectorRef;
    const spyInstance: unknown = vi.spyOn(changeDetectorRef, 'markForCheck');
    component.componentInstance.ngOnInit();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(spyInstance).toHaveBeenCalled();
  });
});
