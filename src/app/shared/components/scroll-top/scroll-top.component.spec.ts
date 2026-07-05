import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollTopComponent } from './scroll-top.component';
import { ChangeDetectorRef, PLATFORM_ID, Renderer2 } from '@angular/core';

describe('ScrollTopComponent', () => {
  let component: ScrollTopComponent;
  let fixture: ComponentFixture<ScrollTopComponent>;
  let renderer: Partial<Renderer2>;
  let changeDetectorRef: Partial<ChangeDetectorRef>;

  beforeEach(async (): Promise<void> => {
    renderer = {
      listen: vi.fn().mockReturnValue(vi.fn()),
    };
    changeDetectorRef = {
      markForCheck: vi.fn(),
    };
    await TestBed.configureTestingModule({
      imports: [ScrollTopComponent],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        { provide: ChangeDetectorRef, useValue: changeDetectorRef },
        { provide: Renderer2, useValue: renderer },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ScrollTopComponent);
    component = fixture.componentInstance;
    global.window.scroll = vi.fn();
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  it('should scroll to top when button is clicked', (): void => {
    component['onClick']();
    expect(window.scroll).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should toggle the visible CSS class on the button according to visibility', (): void => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.scroll-top');
    component['checkVisibility'](401);
    fixture.detectChanges();
    expect(button.classList.contains('scroll-top--visible')).toBeTruthy();
    component['checkVisibility'](399);
    fixture.detectChanges();
    expect(button.classList.contains('scroll-top--visible')).toBeFalsy();
  });

  it('should change visibility according to scrollY value', (): void => {
    component['checkVisibility'](401);
    expect(component['visible']).toBeTruthy();
    component['checkVisibility'](399);
    expect(component['visible']).toBeFalsy();
  });
});
