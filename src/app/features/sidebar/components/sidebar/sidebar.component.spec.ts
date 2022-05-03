import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ResumeComponent } from '@features/resume/components/resume/resume.component';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '@features/sidebar/components/sidebar/sidebar.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '@core/services/config.service';

describe('SidebarComponent', () => {
  let sidebarComponent: SidebarComponent;
  let componentFixture: ComponentFixture<SidebarComponent>;
  let configService: ConfigService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ResumeComponent],
        imports: [
          AvatarModule,
          ButtonModule,
          CardModule,
          ChipModule,
          CommonModule,
          FormsModule,
          InputSwitchModule,
          RippleModule,
          TooltipModule,
        ],
        providers: [ConfigService],
      }).compileComponents();
      componentFixture = TestBed.createComponent(SidebarComponent);
      configService = TestBed.inject(ConfigService);
      sidebarComponent = componentFixture.componentInstance;
      componentFixture.detectChanges();
    })
  );

  it('should create', async () => {
    expect(sidebarComponent).toBeTruthy();
  });

  it(`should have a light theme by default`, async () => {
    expect(sidebarComponent.themeChecked).toBeTruthy();
    expect(localStorage.getItem('theme')).toBeNull();
    expect(document.body.classList).not.toContain('dark');
  });

  it(`should switch the theme to dark`, async () => {
    sidebarComponent.themeChecked = true;
    sidebarComponent.switchTheme();
    expect(localStorage.getItem('theme')).toBeDefined();
    expect(localStorage.getItem('theme')).toEqual('dark');
    expect(document.body.classList).toContain('dark');
  });

  it(`should switch the theme to light`, async () => {
    sidebarComponent.themeChecked = false;
    sidebarComponent.switchTheme();
    expect(localStorage.getItem('theme')).toBeDefined();
    expect(localStorage.getItem('theme')).toEqual('light');
    expect(document.body.classList).not.toContain('dark');
  });

  it(`should set the stored value`, async () => {
    const storeSpy = jest.spyOn(configService, 'setTheme$');
    sidebarComponent.themeChecked = false;
    sidebarComponent.switchTheme();
    expect(storeSpy).toHaveBeenCalledTimes(1);
    expect(storeSpy).toHaveBeenCalledWith('light');
    expect(document.body.classList).not.toContain('dark');
    storeSpy.mockClear();
    sidebarComponent.themeChecked = true;
    sidebarComponent.switchTheme();
    expect(storeSpy).toHaveBeenCalledTimes(1);
    expect(storeSpy).toHaveBeenCalledWith('dark');
    expect(document.body.classList).toContain('dark');
  });

  it(`should open the email adress`, async () => {
    window.open = jest.fn();
    sidebarComponent.openEmailClient();
    expect(window.open).toHaveBeenNthCalledWith(1, 'mailto:gilles.gardet@gmail.com');
  });

  it(`should download a pdf`, async () => {
    const anchorMock = document.createElement('a');
    jest.spyOn(document, 'createElement').mockReturnValue(anchorMock);
    jest.spyOn(anchorMock, 'click');
    jest.spyOn(document.body, 'appendChild');
    jest.spyOn(document.body, 'removeChild');
    sidebarComponent.downloadCurriculumVitae();
    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(anchorMock.click).toHaveBeenCalled();
    expect(document.body.appendChild).toHaveBeenCalledWith(anchorMock);
    expect(document.body.removeChild).toHaveBeenCalledWith(anchorMock);
    expect(anchorMock.href).toEqual('https://github.com/just-jeb/assets/pdf/CV_GARDET_Gilles.pdf');
    expect(anchorMock.download).toEqual('gardet_gilles.pdf');
  });
});
