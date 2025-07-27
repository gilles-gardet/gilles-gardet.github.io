import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be visible by default', () => {
    expect(component.visible).toBe(false);
  });

  it('should emit visibleChange when hideDialog is called', () => {
    jest.spyOn(component.visibleChange, 'emit');
    jest.spyOn(component.hide, 'emit');
    
    component.hideDialog();
    
    expect(component.visible).toBe(false);
    expect(component.visibleChange.emit).toHaveBeenCalledWith(false);
    expect(component.hide.emit).toHaveBeenCalled();
  });

  it('should handle escape key when closeOnEscape is true', () => {
    component.visible = true;
    component.closeOnEscape = true;
    jest.spyOn(component, 'hideDialog');
    
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    jest.spyOn(event, 'preventDefault');
    
    component.onEscapeKey(event);
    
    expect(component.hideDialog).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should not handle escape key when closeOnEscape is false', () => {
    component.visible = true;
    component.closeOnEscape = false;
    jest.spyOn(component, 'hideDialog');
    
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    
    component.onEscapeKey(event);
    
    expect(component.hideDialog).not.toHaveBeenCalled();
  });

  it('should handle mask click when dismissableMask is true', () => {
    component.dismissableMask = true;
    jest.spyOn(component, 'hideDialog');
    
    component.onMaskClick();
    
    expect(component.hideDialog).toHaveBeenCalled();
  });

  it('should not handle mask click when dismissableMask is false', () => {
    component.dismissableMask = false;
    jest.spyOn(component, 'hideDialog');
    
    component.onMaskClick();
    
    expect(component.hideDialog).not.toHaveBeenCalled();
  });

  describe('scroll blocking', () => {
    beforeEach(() => {
      // Mock document.body.style
      Object.defineProperty(document.body, 'style', {
        value: { overflow: '' },
        writable: true,
      });
    });

    it('should block scroll when dialog becomes visible and blockScroll is true', () => {
      component.blockScroll = true;
      component.visible = false;
      
      const changes = {
        visible: new SimpleChange(false, true, false)
      };
      
      component.ngOnChanges(changes);
      
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should restore scroll when dialog becomes hidden and blockScroll is true', () => {
      component.blockScroll = true;
      component.visible = true;
      
      // First, simulate dialog opening (which stores original overflow)
      (component as any).originalBodyOverflow = 'auto';
      document.body.style.overflow = 'hidden';
      
      const changes = {
        visible: new SimpleChange(true, false, false)
      };
      
      component.ngOnChanges(changes);
      
      expect(document.body.style.overflow).toBe('auto');
    });

    it('should not affect scroll when blockScroll is false', () => {
      component.blockScroll = false;
      document.body.style.overflow = 'auto';
      
      const changes = {
        visible: new SimpleChange(false, true, false)
      };
      
      component.ngOnChanges(changes);
      
      expect(document.body.style.overflow).toBe('auto');
    });

    it('should restore scroll when hideDialog is called with blockScroll enabled', () => {
      component.blockScroll = true;
      document.body.style.overflow = 'auto';
      
      // Simulate that scroll was blocked
      (component as any).originalBodyOverflow = 'auto';
      document.body.style.overflow = 'hidden';
      
      component.hideDialog();
      
      expect(document.body.style.overflow).toBe('auto');
    });
  });
});