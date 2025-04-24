import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ThemeService } from '@core/services/theme.service';
import { GeneralComponent } from '@features/general/general.component';
import { MissionService } from '@core/services/mission.service';
import { AvatarComponent } from '@shared/components/avatar/avatar.component';
import { EmailComponent } from '@features/general/components/email/email.component';
import { TranslocoService } from '@jsverse/transloco';
import { of } from 'rxjs';
import { SkillService } from '@core/services/skill.service';
import { mockedInstance } from '@core/jest/mocked-instance.helper';
import { Store } from '@ngrx/store';

const lang = {
  menu: {
    items: {
      mode: {
        dark: 'Dark mode',
        light: 'Light mode',
        title: 'Change the theme',
      },
      language: {
        label: 'Language',
        title: 'Change the language',
      },
      download: {
        label: 'Download my CV',
        title: 'Download my Curriculum Vitae',
      },
    },
  },
};

describe('GeneralComponent', (): void => {
  let contactComponent: GeneralComponent;
  let componentFixture: ComponentFixture<GeneralComponent>;
  const store = mockedInstance(Store);

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [AvatarComponent, ButtonModule, EmailComponent, CommonModule, TooltipModule],
      providers: [
        ThemeService,
        {
          provide: MissionService,
          useValue: {
            clearCache: jest.fn().mockImplementation(),
          },
        },
        {
          provide: SkillService,
          useValue: {
            clearCache: jest.fn().mockImplementation(),
          },
        },
        {
          provide: TranslocoService,
          useValue: {
            setActiveLang: jest.fn(),
            selectTranslateObject: jest.fn().mockReturnValue(of(lang)),
            langChanges$: of('fr'),
          },
        },
        {
          provide: Store,
          useValue: store,
        },
      ],
    }).compileComponents();
    componentFixture = TestBed.createComponent(GeneralComponent);
    contactComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(contactComponent).toBeTruthy();
  });

  it(`should open the email adress`, async (): Promise<void> => {
    window.open = jest.fn();
    contactComponent.openEmailClient();
    expect(window.open).toHaveBeenNthCalledWith(1, 'mailto:gilles.gardet@gmail.com');
  });

  it(`should download a pdf`, async (): Promise<void> => {
    const anchorMock: HTMLAnchorElement = document.createElement('a');
    jest.spyOn(document, 'createElement').mockReturnValue(anchorMock);
    jest.spyOn(anchorMock, 'click');
    jest.spyOn(document.body, 'appendChild');
    jest.spyOn(document.body, 'removeChild');
    (contactComponent as any)._downloadCurriculumVitae();
    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(anchorMock.click).toHaveBeenCalled();
    expect(document.body.appendChild).toHaveBeenCalledWith(anchorMock);
    expect(document.body.removeChild).toHaveBeenCalledWith(anchorMock);
    expect(anchorMock.href).toContain('/assets/pdf/CV_GARDET_Gilles.pdf');
    expect(anchorMock.download).toEqual('gardet_gilles.pdf');
  });

  afterEach((): void => {
    localStorage.clear();
  });
});
