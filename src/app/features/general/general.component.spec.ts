import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@shared/components/menu/menu.component';
import { ThemeService } from '@core/services/theme.service';
import { GeneralComponent } from '@features/general/general.component';
import { AvatarComponent } from '@shared/components/avatar/avatar.component';
import { SlideButtonComponent } from '@shared/components/slide-button/slide-button.component';
import { mockedInstance } from '@core/vitest/mocked-instance.helper';
import { Store } from '@ngrx/store';
import { getTranslocoTestProviders, createMockTranslocoService } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';
import { TranslocoService } from '@jsverse/transloco';

describe('GeneralComponent', (): void => {
  let contactComponent: GeneralComponent;
  let componentFixture: ComponentFixture<GeneralComponent>;
  const store = createMockStore();

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      providers: [
        ...getTranslocoTestProviders(),
        {
          provide: TranslocoService,
          useValue: createMockTranslocoService(),
        },
      ]
    });
    TestBed.overrideComponent(GeneralComponent, {
      add: {
        providers: [
          ThemeService,
          {
            provide: Store,
            useValue: store,
          },
        ],
        imports: [MenuComponent, AvatarComponent, SlideButtonComponent],
      },
      remove: {
        imports: [MenuComponent, AvatarComponent, SlideButtonComponent],
      },
    });
    componentFixture = TestBed.createComponent(GeneralComponent);
    contactComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(contactComponent).toBeTruthy();
  });
});