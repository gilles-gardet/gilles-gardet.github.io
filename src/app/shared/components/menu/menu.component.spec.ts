import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuItem } from '@shared/models/menu-item.model';
import { ElementRef } from '@angular/core';

describe('MenuComponent', (): void => {
  let menuComponent: MenuComponent;
  let componentFixture: ComponentFixture<MenuComponent>;

  const mockMenuItems: MenuItem[] = [
    {
      label: 'Menu',
      items: [
        {
          label: 'Item 1',
          icon: 'icon icon-test',
          command: vi.fn(),
        },
        {
          label: 'Item 2',
          disabled: true,
          command: vi.fn(),
        },
      ],
    },
  ];

  const mockComplexMenuItems: MenuItem[] = [
    {
      label: 'First Group',
      items: [
        {
          label: 'Enabled Item',
          icon: 'pi pi-home',
          title: 'Home item',
          command: vi.fn(),
        },
        {
          separator: true,
        },
        {
          label: 'Disabled Item',
          disabled: true,
          command: vi.fn(),
        },
        {
          label: 'Hidden Item',
          visible: false,
          command: vi.fn(),
        },
      ],
    },
    {
      items: [
        {
          label: 'No Icon Item',
          command: vi.fn(),
        },
      ],
    },
    {
      label: 'Empty Group',
      items: [],
    },
  ];

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MenuComponent],
    }).compileComponents();
    componentFixture = TestBed.createComponent(MenuComponent);
    menuComponent = componentFixture.componentInstance;
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    expect(menuComponent).toBeTruthy();
  });

  describe('component initialization', (): void => {
    it('should have default property values', (): void => {
      expect(menuComponent.model).toEqual([]);
      expect(menuComponent.popup).toBe(false);
      expect(menuComponent.autoZIndex).toBe(true);
      expect(menuComponent.appendTo).toBe('body');
      expect(menuComponent.visible).toBe(false);
    });

    it('should accept input properties', (): void => {
      menuComponent.model = mockMenuItems;
      menuComponent.popup = true;
      menuComponent.autoZIndex = false;
      menuComponent.appendTo = 'parent';
      expect(menuComponent.model).toBe(mockMenuItems);
      expect(menuComponent.popup).toBe(true);
      expect(menuComponent.autoZIndex).toBe(false);
      expect(menuComponent.appendTo).toBe('parent');
    });

    it('should not be visible by default', (): void => {
      expect(menuComponent.visible).toBe(false);
    });
  });

  describe('toggle method', (): void => {
    let mockEvent: Event;
    let mockTarget: HTMLElement;

    beforeEach((): void => {
      mockTarget = document.createElement('button') as HTMLElement;
      mockEvent = new Event('click');
      Object.defineProperty(mockEvent, 'target', { value: mockTarget });
    });

    it('should show menu when not visible', (): void => {
      menuComponent.model = mockMenuItems;
      componentFixture.detectChanges();
      menuComponent.toggle(mockEvent);
      expect(menuComponent.visible).toBe(true);
    });

    it('should hide menu when visible', (): void => {
      menuComponent.visible = true;
      menuComponent.toggle(mockEvent);
      expect(menuComponent.visible).toBe(false);
    });

    it('should set target element', (): void => {
      menuComponent.toggle(mockEvent);
      expect((menuComponent as any).targetElement).toBe(mockTarget);
    });
  });

  describe('show method', (): void => {
    let mockEvent: Event;
    let mockTarget: HTMLElement;

    beforeEach((): void => {
      mockTarget = document.createElement('button') as HTMLElement;
      mockEvent = new Event('click');
      Object.defineProperty(mockEvent, 'target', { value: mockTarget });
    });

    it('should set visible to true', (): void => {
      menuComponent.show(mockEvent);
      expect(menuComponent.visible).toBe(true);
    });

    it('should set target element', (): void => {
      menuComponent.show(mockEvent);
      expect((menuComponent as any).targetElement).toBe(mockTarget);
    });
  });

  describe('hide method', (): void => {
    it('should set visible to false', (): void => {
      menuComponent.visible = true;
      menuComponent.hide();
      expect(menuComponent.visible).toBe(false);
    });

    it('should clear target element', (): void => {
      (menuComponent as any).targetElement = document.createElement('div') as HTMLElement;
      menuComponent.hide();
      expect((menuComponent as any).targetElement).toBeNull();
    });
  });

  describe('positionMenu method', (): void => {
    let mockTarget: HTMLElement;
    let mockMenuElement: HTMLElement;

    beforeEach((): void => {
      mockTarget = document.createElement('button') as HTMLElement;
      mockMenuElement = document.createElement('div') as HTMLElement;
      (menuComponent as any).targetElement = mockTarget;
      menuComponent.menuContainer = new ElementRef(mockMenuElement);
      vi.spyOn(mockTarget, 'getBoundingClientRect').mockReturnValue({
        left: 100,
        top: 50,
        bottom: 80,
        right: 150,
        width: 50,
        height: 30,
      } as DOMRect);
      vi.spyOn(mockMenuElement, 'getBoundingClientRect').mockReturnValue({
        width: 200,
        height: 150,
      } as DOMRect);
      Object.defineProperty(window, 'innerHeight', { value: 800, writable: true });
      Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });
    });

    it('should return early if no menu container', (): void => {
      menuComponent.menuContainer = undefined;
      expect(() => (menuComponent as any).positionMenu()).not.toThrow();
    });

    it('should return early if no target element', (): void => {
      (menuComponent as any).targetElement = null;
      expect(() => (menuComponent as any).positionMenu()).not.toThrow();
    });

    it('should position menu below target by default', (): void => {
      (menuComponent as any).positionMenu();
      expect(mockMenuElement.style.left).toBe('100px');
      expect(mockMenuElement.style.top).toBe('84px');
    });

    it('should adjust left position if menu overflows viewport width', (): void => {
      vi.spyOn(mockTarget, 'getBoundingClientRect').mockReturnValue({
        left: 1100,
        right: 1150,
        top: 50,
        bottom: 80,
      } as DOMRect);
      (menuComponent as any).positionMenu();
      expect(mockMenuElement.style.left).toBe('950px');
    });

    it('should adjust top position if menu overflows viewport height', (): void => {
      vi.spyOn(mockTarget, 'getBoundingClientRect').mockReturnValue({
        left: 100,
        right: 150,
        top: 700,
        bottom: 730,
      } as DOMRect);
      (menuComponent as any).positionMenu();
      expect(mockMenuElement.style.top).toBe('546px');
    });
  });

  describe('onDocumentClick method', (): void => {
    let mockTarget: HTMLElement;
    let mockMenuElement: HTMLElement;
    let mockClickTarget: HTMLElement;

    beforeEach((): void => {
      mockTarget = document.createElement('button') as HTMLElement;
      mockMenuElement = document.createElement('div') as HTMLElement;
      mockClickTarget = document.createElement('span') as HTMLElement;
      (menuComponent as any).targetElement = mockTarget;
      menuComponent.menuContainer = new ElementRef(mockMenuElement);
      menuComponent.visible = true;

      // Mock contains method
      vi.spyOn(mockMenuElement, 'contains').mockReturnValue(false);
      vi.spyOn(mockTarget, 'contains').mockReturnValue(false);
    });

    it('should not hide menu if not visible', (): void => {
      menuComponent.visible = false;
      const event = new Event('click');
      Object.defineProperty(event, 'target', { value: mockClickTarget });
      menuComponent.onDocumentClick(event);
      expect(menuComponent.visible).toBe(false);
    });

    it('should not hide menu if click is inside menu', (): void => {
      vi.spyOn(mockMenuElement, 'contains').mockReturnValue(true);
      const event = new Event('click');
      Object.defineProperty(event, 'target', { value: mockClickTarget });
      menuComponent.onDocumentClick(event);
      expect(menuComponent.visible).toBe(true);
    });

    it('should not hide menu if click is on target element', (): void => {
      vi.spyOn(mockTarget, 'contains').mockReturnValue(true);
      const event = new Event('click');
      Object.defineProperty(event, 'target', { value: mockClickTarget });
      menuComponent.onDocumentClick(event);
      expect(menuComponent.visible).toBe(true);
    });

    it('should hide menu if click is outside menu and target', (): void => {
      const event = new Event('click');
      Object.defineProperty(event, 'target', { value: mockClickTarget });
      menuComponent.onDocumentClick(event);
      expect(menuComponent.visible).toBe(false);
    });

    it('should not error if menuContainer is undefined', (): void => {
      menuComponent.menuContainer = undefined;
      const event = new Event('click');
      Object.defineProperty(event, 'target', { value: mockClickTarget });
      expect(() => menuComponent.onDocumentClick(event)).not.toThrow();
    });

    it('should not error if targetElement is null', (): void => {
      (menuComponent as any).targetElement = null;
      const event = new Event('click');
      Object.defineProperty(event, 'target', { value: mockClickTarget });
      expect(() => menuComponent.onDocumentClick(event)).not.toThrow();
    });
  });

  describe('onEvent method (escape and resize)', (): void => {
    it('should hide menu if visible on escape', (): void => {
      menuComponent.visible = true;
      menuComponent.onEvent();
      expect(menuComponent.visible).toBe(false);
    });

    it('should hide menu if visible on resize', (): void => {
      menuComponent.visible = true;
      menuComponent.onEvent();
      expect(menuComponent.visible).toBe(false);
    });

    it('should not change state if menu not visible', (): void => {
      menuComponent.visible = false;
      menuComponent.onEvent();
      expect(menuComponent.visible).toBe(false);
    });
  });

  describe('onItemClick method', (): void => {
    it('should execute command and hide menu for enabled item', (): void => {
      const mockCommand = vi.fn();
      const menuItem: MenuItem = { label: 'Test', command: mockCommand };
      menuComponent.visible = true;
      menuComponent.onItemClick(menuItem);
      expect(mockCommand).toHaveBeenCalled();
      expect(menuComponent.visible).toBe(false);
    });

    it('should not execute command for disabled item', (): void => {
      const mockCommand = vi.fn();
      const menuItem: MenuItem = { label: 'Test', disabled: true, command: mockCommand };
      menuComponent.onItemClick(menuItem);
      expect(mockCommand).not.toHaveBeenCalled();
    });

    it('should not hide menu for disabled item', (): void => {
      const menuItem: MenuItem = { label: 'Test', disabled: true };
      menuComponent.visible = true;
      menuComponent.onItemClick(menuItem);
      expect(menuComponent.visible).toBe(true);
    });

    it('should handle item without command', (): void => {
      const menuItem: MenuItem = { label: 'Test' };
      menuComponent.visible = true;
      expect(() => menuComponent.onItemClick(menuItem)).not.toThrow();
      expect(menuComponent.visible).toBe(false);
    });

    it('should return early for disabled item without executing anything', (): void => {
      const menuItem: MenuItem = { label: 'Test', disabled: true };
      const hideSpy = vi.spyOn(menuComponent, 'hide');
      menuComponent.onItemClick(menuItem);
      expect(hideSpy).not.toHaveBeenCalled();
    });
  });

  describe('trackByIndex method', (): void => {
    it('should return the index', (): void => {
      expect(menuComponent.trackByIndex(0)).toBe(0);
      expect(menuComponent.trackByIndex(5)).toBe(5);
      expect(menuComponent.trackByIndex(10)).toBe(10);
    });
  });

  describe('template rendering', (): void => {
    beforeEach((): void => {
      // Don't set model and visible here to allow individual tests to control it
    });

    it('should not render menu when not visible', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = false;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('.cv-menu')).toBeNull();
    });

    it('should render menu when visible', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('.cv-menu')).toBeTruthy();
    });

    it('should add popup class when popup is true', (): void => {
      menuComponent.popup = true;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const menuElement = compiled.querySelector('.cv-menu');
      expect(menuElement.classList.contains('cv-menu-popup')).toBe(true);
    });

    it('should render menu groups with labels', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const groupLabel = compiled.querySelector('.cv-menu-group-label');
      expect(groupLabel).toBeTruthy();
      expect(groupLabel.textContent.trim()).toBe('First Group');
    });

    it('should render menu groups without labels', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const groups = compiled.querySelectorAll('.cv-menu-group');
      expect(groups.length).toBeGreaterThan(1);
    });

    it('should render menu items with icons', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const icon = compiled.querySelector('.cv-menu-item-icon');
      expect(icon).toBeTruthy();
      expect(icon.classList.contains('pi')).toBe(true);
      expect(icon.classList.contains('pi-home')).toBe(true);
    });

    it('should render menu items without icons', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const menuItems = compiled.querySelectorAll('.cv-menu-item-link');
      const itemWithoutIcon = Array.from(menuItems as NodeListOf<Element>).find(
        (item: Element) => !item.querySelector('.cv-menu-item-icon'),
      );
      expect(itemWithoutIcon).toBeTruthy();
    });

    it('should render separators', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const separator = compiled.querySelector('.cv-menu-separator');
      expect(separator).toBeTruthy();
    });

    it('should add disabled class to disabled items', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const disabledItem = compiled.querySelector('.cv-menu-item-disabled');
      expect(disabledItem).toBeTruthy();
    });

    it('should set title attribute when provided', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const buttonWithTitle = compiled.querySelector('button[title="Home item"]');
      expect(buttonWithTitle).toBeTruthy();
    });

    it('should not render hidden items', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const menuTexts = compiled.querySelectorAll('.cv-menu-item-text');
      const hiddenItemText = Array.from(menuTexts as NodeListOf<Element>).find(
        (text: Element) => text.textContent?.trim() === 'Hidden Item',
      );
      expect(hiddenItemText).toBeUndefined();
    });

    it('should not render empty groups', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      const groupLabels = compiled.querySelectorAll('.cv-menu-group-label');
      const emptyGroupLabel = Array.from(groupLabels as NodeListOf<Element>).find(
        (label: Element) => label.textContent?.trim() === 'Empty Group',
      );
      expect(emptyGroupLabel).toBeUndefined();
    });

    it('should handle groups without items array', (): void => {
      menuComponent.model = [{ label: 'No Items' }];
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('.cv-menu')).toBeTruthy();
    });
  });

  describe('integration behavior', (): void => {
    it('should work with complex menu structure', (): void => {
      menuComponent.model = mockComplexMenuItems;
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('.cv-menu')).toBeTruthy();
      expect(compiled.querySelectorAll('.cv-menu-group').length).toBeGreaterThan(0);
      expect(compiled.querySelectorAll('.cv-menu-item').length).toBeGreaterThan(0);
    });

    it('should handle empty model gracefully', (): void => {
      menuComponent.model = [];
      menuComponent.visible = true;
      componentFixture.detectChanges();
      const compiled = componentFixture.nativeElement;
      expect(compiled.querySelector('.cv-menu')).toBeTruthy();
      expect(compiled.querySelectorAll('.cv-menu-group').length).toBe(0);
    });

    it('should maintain component reference integrity', (): void => {
      const initialComponent = menuComponent;
      componentFixture.detectChanges();
      expect(menuComponent).toBe(initialComponent);
    });
  });
});
