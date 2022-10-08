import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfigService } from '@core/services/config.service';
import { ContactComponent } from '@features/contact/components/general/contact.component';

describe('ContactComponent', () => {
  let contactComponent: ContactComponent;
  let componentFixture: ComponentFixture<ContactComponent>;
  let configService: ConfigService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [
        AvatarModule,
        ButtonModule,
        CardModule,
        ChipModule,
        CommonModule,
        InputSwitchModule,
        RippleModule,
        TooltipModule,
      ],
      providers: [ConfigService],
    }).compileComponents();
    componentFixture = TestBed.createComponent(ContactComponent);
    configService = TestBed.inject(ConfigService);
    contactComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async () => {
    expect(contactComponent).toBeTruthy();
  });

  it(`should have a light theme by default`, async () => {
    expect(contactComponent.themeChecked).toBeTruthy();
    expect(localStorage.getItem('theme')).toBeNull();
    expect(document.body.classList).not.toContain('dark');
  });

  it(`should switch the theme to dark`, async () => {
    contactComponent.themeChecked = true;
    contactComponent.switchTheme();
    expect(localStorage.getItem('theme')).toBeDefined();
    expect(localStorage.getItem('theme')).toEqual('dark');
    expect(document.body.classList).toContain('dark');
  });

  it(`should switch the theme to light`, async () => {
    contactComponent.themeChecked = false;
    contactComponent.switchTheme();
    expect(localStorage.getItem('theme')).toBeDefined();
    expect(localStorage.getItem('theme')).toEqual('light');
    expect(document.body.classList).not.toContain('dark');
  });

  it(`should set the stored value`, async () => {
    const storeSpy = jest.spyOn(configService, 'setTheme$');
    contactComponent.themeChecked = false;
    contactComponent.switchTheme();
    expect(storeSpy).toHaveBeenCalledTimes(1);
    expect(storeSpy).toHaveBeenCalledWith('light');
    expect(document.body.classList).not.toContain('dark');
    storeSpy.mockClear();
    contactComponent.themeChecked = true;
    contactComponent.switchTheme();
    expect(storeSpy).toHaveBeenCalledTimes(1);
    expect(storeSpy).toHaveBeenCalledWith('dark');
    expect(document.body.classList).toContain('dark');
  });

  it(`should open the email adress`, async () => {
    window.open = jest.fn();
    contactComponent.openEmailClient();
    expect(window.open).toHaveBeenNthCalledWith(1, 'mailto:gilles.gardet@gmail.com');
  });

  it(`should download a pdf`, async () => {
    const anchorMock = document.createElement('a');
    jest.spyOn(document, 'createElement').mockReturnValue(anchorMock);
    jest.spyOn(anchorMock, 'click');
    jest.spyOn(document.body, 'appendChild');
    jest.spyOn(document.body, 'removeChild');
    contactComponent.downloadCurriculumVitae();
    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(anchorMock.click).toHaveBeenCalled();
    expect(document.body.appendChild).toHaveBeenCalledWith(anchorMock);
    expect(document.body.removeChild).toHaveBeenCalledWith(anchorMock);
    expect(anchorMock.href).toContain('/assets/pdf/CV_GARDET_Gilles.pdf');
    expect(anchorMock.download).toEqual('gardet_gilles.pdf');
  });
});
