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
import { GeneralComponent } from '@features/general/components/general/general.component';
import { TranslateModule } from '@ngx-translate/core';

describe('GeneralComponent', () => {
  let contactComponent: GeneralComponent;
  let componentFixture: ComponentFixture<GeneralComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AvatarModule,
        ButtonModule,
        CardModule,
        ChipModule,
        CommonModule,
        InputSwitchModule,
        RippleModule,
        TooltipModule,
        TranslateModule.forRoot(),
      ],
      providers: [ConfigService],
    }).compileComponents();
    componentFixture = TestBed.createComponent(GeneralComponent);
    contactComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async () => {
    expect(contactComponent).toBeTruthy();
  });

  it(`should have no theme by default`, async () => {
    expect(contactComponent.isDarkTheme).toBeFalsy();
    expect(localStorage.getItem('theme')).toEqual('light');
    expect(document.getElementsByTagName('html')[0].classList).not.toContain('dark');
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
    (contactComponent as any)._downloadCurriculumVitae();
    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(anchorMock.click).toHaveBeenCalled();
    expect(document.body.appendChild).toHaveBeenCalledWith(anchorMock);
    expect(document.body.removeChild).toHaveBeenCalledWith(anchorMock);
    expect(anchorMock.href).toContain('/assets/pdf/CV_GARDET_Gilles.pdf');
    expect(anchorMock.download).toEqual('gardet_gilles.pdf');
  });

  afterEach(() => {
    localStorage.clear();
  });
});
