import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MenuComponent } from '@shared/components/menu/menu.component';
import { ThemeService } from '@core/services/theme.service';
import { GeneralComponent } from '@features/general/general.component';
import { AvatarComponent } from '@shared/components/avatar/avatar.component';
import { Store } from '@ngrx/store';
import { createMockTranslocoService, getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';
import { TranslocoService } from '@jsverse/transloco';
import { Contact } from '@core/models/contact.model';
import { ThemeActions } from '@state/theme/theme.actions';
import { LanguageActions } from '@state/language/language.actions';
import { of } from 'rxjs';
import { environment } from '@environments/environment';

describe('GeneralComponent', (): void => {
  let generalComponent: GeneralComponent;
  let componentFixture: ComponentFixture<GeneralComponent>;
  let store: any;
  let translocoService: any;

  const mockContact: Contact = {
    menu: {
      items: {
        mode: {
          title: 'Switch theme',
          dark: 'Dark mode',
          light: 'Light mode',
        },
        language: {
          label: 'Language',
          title: 'Switch language',
        },
        download: {
          label: 'Download CV',
          title: 'Download curriculum vitae',
        },
      },
    },
  };

  beforeEach(waitForAsync((): void => {
    store = createMockStore();
    translocoService = createMockTranslocoService();
    vi.mocked(store.select).mockReturnValue(of('light'));
    vi.mocked(store.dispatch).mockReturnValue(undefined);
    vi.mocked(translocoService.selectTranslateObject).mockReturnValue(of(mockContact));
    vi.mocked(translocoService.getActiveLang).mockReturnValue('en');
    TestBed.configureTestingModule({
      providers: [
        ...getTranslocoTestProviders(),
        {
          provide: TranslocoService,
          useValue: translocoService,
        },
      ],
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
        imports: [MenuComponent, AvatarComponent],
      },
      remove: {
        imports: [MenuComponent, AvatarComponent],
      },
    });
    componentFixture = TestBed.createComponent(GeneralComponent);
    generalComponent = componentFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  it('should create', (): void => {
    expect(generalComponent).toBeTruthy();
  });

  it('should use OnPush change detection strategy', (): void => {
    const componentDef = (GeneralComponent as any).ɵcmp;
    expect(componentDef.onPush).toBe(true);
  });

  describe('ngOnInit', (): void => {
    it('should subscribe to contact translations and theme', (): void => {
      generalComponent.ngOnInit();
      expect(translocoService.selectTranslateObject).toHaveBeenCalledWith('cv.contact');
      expect(store.select).toHaveBeenCalled();
    });

    it('should initialize menu items', (): void => {
      generalComponent.ngOnInit();
      expect(generalComponent['menuItems']).toHaveLength(1);
      expect(generalComponent['menuItems'][0].label).toBe('Menu');
      expect(generalComponent['menuItems'][0].items).toHaveLength(3);
    });
  });

  describe('onScroll', (): void => {
    it('should hide menu when scrolling', (): void => {
      const mockMenu = { hide: vi.fn() } as any;
      generalComponent['menu'] = mockMenu;
      generalComponent.onScroll();
      expect(mockMenu.hide).toHaveBeenCalled();
    });

    it('should handle case when menu is undefined', (): void => {
      generalComponent['menu'] = undefined;
      expect(() => generalComponent.onScroll()).not.toThrow();
    });
  });

  describe('_setMenuItems', (): void => {
    beforeEach((): void => {
      generalComponent['isDarkTheme'] = false;
    });

    it('should create menu items with correct structure', (): void => {
      generalComponent['_setMenuItems'](mockContact);
      const menuItems = generalComponent['menuItems'];
      expect(menuItems).toHaveLength(1);
      expect(menuItems[0].label).toBe('Menu');
      expect(menuItems[0].items).toHaveLength(3);
    });

    it('should set correct theme menu item for light theme', (): void => {
      generalComponent['isDarkTheme'] = false;
      generalComponent['_setMenuItems'](mockContact);
      const themeItem = generalComponent['menuItems'][0].items![0];
      expect(themeItem.label).toBe('Light mode');
      expect(themeItem.icon).toBe('icon icon-sun');
      expect(themeItem.title).toBe('Switch theme');
    });

    it('should set correct theme menu item for dark theme', (): void => {
      generalComponent['isDarkTheme'] = true;
      generalComponent['_setMenuItems'](mockContact);
      const themeItem = generalComponent['menuItems'][0].items![0];
      expect(themeItem.label).toBe('Dark mode');
      expect(themeItem.icon).toBe('icon icon-moon');
      expect(themeItem.title).toBe('Switch theme');
    });

    it('should set language menu item correctly', (): void => {
      generalComponent['_setMenuItems'](mockContact);
      const languageItem = generalComponent['menuItems'][0].items![1];
      expect(languageItem.label).toBe('Language');
      expect(languageItem.icon).toBe('icon icon-globe');
      expect(languageItem.title).toBe('Switch language');
    });

    it('should set download menu item correctly', (): void => {
      generalComponent['_setMenuItems'](mockContact);
      const downloadItem = generalComponent['menuItems'][0].items![2];
      expect(downloadItem.label).toBe('Download CV');
      expect(downloadItem.icon).toBe('icon icon-download');
      expect(downloadItem.title).toBe('Download curriculum vitae');
    });
  });

  describe('menu item commands', (): void => {
    beforeEach((): void => {
      generalComponent['_setMenuItems'](mockContact);
    });

    it('should dispatch theme change action when theme command is executed', (): void => {
      generalComponent['isDarkTheme'] = false;
      const themeItem = generalComponent['menuItems'][0].items![0];
      themeItem.command!();
      expect(store.dispatch).toHaveBeenCalledWith(ThemeActions.updateTheme({ theme: 'dark' }));
    });

    it('should dispatch language change action when language command is executed', (): void => {
      const languageItem = generalComponent['menuItems'][0].items![1];
      languageItem.command!();
      expect(store.dispatch).toHaveBeenCalledWith(LanguageActions.updateLanguage({ language: 'fr', loading: true }));
    });

    it('should call download CV when download command is executed', (): void => {
      vi.spyOn(generalComponent as any, '_downloadCurriculumVitae');
      const downloadItem = generalComponent['menuItems'][0].items![2];
      downloadItem.command!();
      expect(generalComponent['_downloadCurriculumVitae']).toHaveBeenCalled();
    });
  });

  describe('onThemeChange', (): void => {
    beforeEach((): void => {
      generalComponent['_setMenuItems'](mockContact);
    });

    it('should set dark theme when theme is dark', (): void => {
      vi.spyOn(generalComponent as any, '_setDarkTheme');
      generalComponent.onThemeChange(mockContact, 'dark');
      expect(generalComponent['_setDarkTheme']).toHaveBeenCalledWith(mockContact);
    });

    it('should set light theme when theme is light', (): void => {
      vi.spyOn(generalComponent as any, '_setLightTheme');
      generalComponent.onThemeChange(mockContact, 'light');
      expect(generalComponent['_setLightTheme']).toHaveBeenCalledWith(mockContact);
    });
  });

  describe('_setLightTheme', (): void => {
    beforeEach((): void => {
      generalComponent['_setMenuItems'](mockContact);
    });

    it('should set isDarkTheme to false', (): void => {
      generalComponent['_setLightTheme'](mockContact);
      expect(generalComponent['isDarkTheme']).toBe(false);
    });

    it('should remove dark class from document', (): void => {
      vi.spyOn(document.documentElement.classList, 'remove');
      generalComponent['_setLightTheme'](mockContact);
      expect(document.documentElement.classList.remove).toHaveBeenCalledWith('dark');
    });

    it('should update menu item to dark mode', (): void => {
      generalComponent['_setLightTheme'](mockContact);
      const themeItem = generalComponent['menuItems'][0].items![0];
      expect(themeItem.label).toBe('Dark mode');
      expect(themeItem.icon).toBe('icon icon-moon');
    });
  });

  describe('_setDarkTheme', (): void => {
    beforeEach((): void => {
      generalComponent['_setMenuItems'](mockContact);
    });

    it('should set isDarkTheme to true', (): void => {
      generalComponent['_setDarkTheme'](mockContact);
      expect(generalComponent['isDarkTheme']).toBe(true);
    });

    it('should add dark class to document', (): void => {
      vi.spyOn(document.documentElement.classList, 'add');
      generalComponent['_setDarkTheme'](mockContact);
      expect(document.documentElement.classList.add).toHaveBeenCalledWith('dark');
    });

    it('should update menu item to light mode', (): void => {
      generalComponent['_setDarkTheme'](mockContact);
      const themeItem = generalComponent['menuItems'][0].items![0];
      expect(themeItem.label).toBe('Light mode');
      expect(themeItem.icon).toBe('icon icon-sun');
    });
  });

  describe('_extractModeMenuItem', (): void => {
    it('should return first child menu item', (): void => {
      generalComponent['_setMenuItems'](mockContact);
      const menuItem = generalComponent['_extractModeMenuItem']();
      expect(menuItem).toBe(generalComponent['menuItems'][0].items![0]);
    });

    it('should throw error when menu items not initialized', (): void => {
      generalComponent['menuItems'] = [];
      expect(() => generalComponent['_extractModeMenuItem']()).toThrow('The menu items are not initialized');
    });

    it('should throw error when menu items is undefined', (): void => {
      generalComponent['menuItems'] = undefined as any;
      expect(() => generalComponent['_extractModeMenuItem']()).toThrow('The menu items are not initialized');
    });

    it('should throw error when first menu item has no items', (): void => {
      generalComponent['menuItems'] = [{ label: 'Test' }];
      expect(() => generalComponent['_extractModeMenuItem']()).toThrow('The menu items are not properly initialized');
    });

    it('should throw error when child menu item is undefined', (): void => {
      generalComponent['menuItems'] = [{ label: 'Test', items: [] }];
      expect(() => generalComponent['_extractModeMenuItem']()).toThrow('The menu items are not properly initialized');
    });
  });

  describe('openEmailClient', (): void => {
    it('should open email client with correct mailto link', (): void => {
      vi.spyOn(window, 'open').mockImplementation(() => null);
      generalComponent.openEmailClient();
      expect(window.open).toHaveBeenCalledWith('mailto:gilles.gardet@gmail.com');
    });
  });

  describe('_downloadCurriculumVitae', (): void => {
    let createElementSpy: any;
    let appendChildSpy: any;
    let removeChildSpy: any;

    beforeEach((): void => {
      createElementSpy = vi.spyOn(document, 'createElement');
      appendChildSpy = vi.spyOn(document.body, 'appendChild');
      removeChildSpy = vi.spyOn(document.body, 'removeChild');
    });

    afterEach((): void => {
      createElementSpy?.mockRestore();
      appendChildSpy?.mockRestore();
      removeChildSpy?.mockRestore();
    });

    it('should create anchor element and trigger download', (): void => {
      const mockAnchor = {
        href: '',
        download: '',
        click: vi.fn(),
      };
      createElementSpy.mockImplementation((tagName: string) => {
        if (tagName === 'a') {
          return mockAnchor as any;
        }
        return { tagName } as any;
      });
      appendChildSpy.mockImplementation(() => null as any);
      removeChildSpy.mockImplementation(() => null as any);
      generalComponent['_downloadCurriculumVitae']();
      expect(document.createElement).toHaveBeenCalledWith('a');
      expect(mockAnchor.href).toBe(`${environment.cdnUrl}/src/assets/pdf/CV_GARDET_Gilles.pdf`);
      expect(mockAnchor.download).toBe('gardet_gilles.pdf');
      expect(document.body.appendChild).toHaveBeenCalledWith(mockAnchor);
      expect(mockAnchor.click).toHaveBeenCalled();
      expect(document.body.removeChild).toHaveBeenCalledWith(mockAnchor);
    });
  });

  describe('component integration', (): void => {
    it('should handle lifecycle methods without errors', (): void => {
      vi.spyOn(window, 'open').mockImplementation(() => null);
      expect(() => {
        generalComponent.ngOnInit();
        generalComponent.onScroll();
        generalComponent.openEmailClient();
      }).not.toThrow();
    });

    it('should maintain menu state correctly', (): void => {
      generalComponent.ngOnInit();
      expect(generalComponent['menuItems']).toHaveLength(1);
      generalComponent.onThemeChange(mockContact, 'dark');
      expect(generalComponent['isDarkTheme']).toBe(true);
      generalComponent.onThemeChange(mockContact, 'light');
      expect(generalComponent['isDarkTheme']).toBe(false);
    });

    it('should handle language switching correctly', (): void => {
      generalComponent['_setMenuItems'](mockContact);
      const languageItem = generalComponent['menuItems'][0].items![1];
      vi.mocked(translocoService.getActiveLang).mockReturnValue('fr');
      languageItem.command!();
      expect(store.dispatch).toHaveBeenCalledWith(LanguageActions.updateLanguage({ language: 'en', loading: true }));
    });
  });
});
