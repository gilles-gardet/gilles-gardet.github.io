import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfigService, DARK_THEME, LIGHT_THEME } from '@core/services/config.service';
import { GeneralComponent } from '@features/general/general.component';
import { MissionService } from '@core/services/mission.service';
import { AvatarComponent } from '@shared/components/avatar/avatar.component';
import { EmailComponent } from '@features/general/components/email/email.component';
import { TranslocoService } from '@jsverse/transloco';
import { of } from 'rxjs';

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

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [
        AvatarComponent,
        ButtonModule,
        CardModule,
        EmailComponent,
        CommonModule,
        InputSwitchModule,
        RippleModule,
        TooltipModule,
      ],
      providers: [
        ConfigService,
        {
          provide: MissionService,
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
      ],
    }).compileComponents();
    componentFixture = TestBed.createComponent(GeneralComponent);
    contactComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(contactComponent).toBeTruthy();
  });

  it(`should have no theme by default`, async (): Promise<void> => {
    expect((contactComponent as any).isDarkTheme).toBeFalsy();
    expect(localStorage.getItem('theme')).toEqual('light');
    expect(document.getElementsByTagName('html')[0].classList).not.toContain('dark');
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
