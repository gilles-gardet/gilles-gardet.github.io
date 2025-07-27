import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { MenuItem } from '@shared/models/menu-item.model';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const mockMenuItems: MenuItem[] = [
    {
      label: 'Menu',
      items: [
        {
          label: 'Item 1',
          icon: 'icon icon-test',
          command: jest.fn(),
        },
        {
          label: 'Item 2',
          disabled: true,
          command: jest.fn(),
        },
      ],
    },
  ];

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.model = mockMenuItems;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  it('should not be visible by default', (): void => {
    expect(component.visible).toBe(false);
  });

  it('should show menu when toggle is called', (): void => {
    const event = new Event('click');
    Object.defineProperty(event, 'target', { value: document.createElement('button') });
    component.toggle(event);
    expect(component.visible).toBe(true);
  });

  it('should hide menu when toggle is called twice', (): void => {
    const event = new Event('click');
    Object.defineProperty(event, 'target', { value: document.createElement('button') });
    component.toggle(event);
    expect(component.visible).toBe(true);
    component.toggle(event);
    expect(component.visible).toBe(false);
  });

  it('should hide menu on escape key', (): void => {
    component.visible = true;
    component.onEvent();
    expect(component.visible).toBe(false);
  });

  it('should execute command when menu item is clicked', (): void => {
    const menuItem: MenuItem = mockMenuItems[0].items![0];
    component.onItemClick(menuItem);
    expect(menuItem.command).toHaveBeenCalled();
    expect(component.visible).toBe(false);
  });

  it('should not execute command when disabled menu item is clicked', (): void => {
    const menuItem: MenuItem = mockMenuItems[0].items![1];
    component.onItemClick(menuItem);
    expect(menuItem.command).not.toHaveBeenCalled();
  });

  it('should track items by index', (): void => {
    const index = 0;
    expect(component.trackByIndex(index)).toBe(index);
  });

  it('should hide menu on window resize', (): void => {
    component.visible = true;
    component.onEvent();
    expect(component.visible).toBe(false);
  });
});
