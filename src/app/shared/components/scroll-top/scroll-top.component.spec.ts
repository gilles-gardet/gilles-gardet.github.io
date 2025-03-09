import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollTopComponent } from './scroll-top.component';
import { ChangeDetectorRef, PLATFORM_ID, Renderer2 } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationEvent } from '@angular/animations';

describe('ScrollTopComponent', () => {
  let component: ScrollTopComponent;
  let fixture: ComponentFixture<ScrollTopComponent>;
  let renderer: Partial<Renderer2>;
  let changeDetectorRef: Partial<ChangeDetectorRef>;

  beforeEach(async (): Promise<void> => {
    renderer = {
      listen: jest.fn().mockReturnValue(jest.fn()),
    };
    changeDetectorRef = {
      markForCheck: jest.fn(),
    };
    await TestBed.configureTestingModule({
      imports: [ScrollTopComponent, NoopAnimationsModule],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        { provide: ChangeDetectorRef, useValue: changeDetectorRef },
        { provide: Renderer2, useValue: renderer },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ScrollTopComponent);
    component = fixture.componentInstance;
    global.window.scroll = jest.fn();
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

  it('should change overlay when entering', (): void => {
    const openAnimationEvent: Partial<AnimationEvent> = {
      toState: 'open',
      element: document.createElement('div'),
    };
    component['onEnter'](openAnimationEvent as AnimationEvent);
    expect(component['overlay']?.style.zIndex).toEqual(String(1002));
    const voidAnimationEvent: Partial<AnimationEvent> = {
      toState: 'void',
    };
    component['onEnter'](voidAnimationEvent as AnimationEvent);
    expect(component['overlay']).toBeUndefined();
  });

  it('should change overlay when leaving', (): void => {
    const element = document.createElement('div');
    const voidAnimationEvent: Partial<AnimationEvent> = {
      toState: 'void',
      element: element,
    };
    component['onLeave'](voidAnimationEvent as AnimationEvent);
    expect(voidAnimationEvent.element.style.zIndex).toEqual('');
    element.style.zIndex = '1';
    const testAnimationEvent: Partial<AnimationEvent> = {
      toState: 'test',
      element: element,
    };
    component['onLeave'](testAnimationEvent as AnimationEvent);
    expect(testAnimationEvent.element.style.zIndex).toEqual('1');
  });

  it('should change visibility according to scrollY value', (): void => {
    component['checkVisibility'](401);
    expect(component['visible']).toBeTruthy();
    component['checkVisibility'](399);
    expect(component['visible']).toBeFalsy();
  });
});
