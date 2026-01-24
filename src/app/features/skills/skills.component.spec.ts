import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from '@features/skills/skills.component';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { Store } from '@ngrx/store';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';
import { of } from 'rxjs';
import { Skill } from '@core/models/skill.model';
import { ChangeDetectorRef } from '@angular/core';

describe('SkillsComponent', (): void => {
  let skillsComponent: SkillsComponent;
  let componentFixture: ComponentFixture<SkillsComponent>;
  let store: any;
  let changeDetectorRef: ChangeDetectorRef;

  const mockSkills: Skill[] = [
    { name: 'Angular', rate: 90 },
    { name: 'TypeScript', rate: 85 },
    { name: 'Java', rate: 80 },
    { name: 'Python', rate: 75 },
  ];

  beforeEach(waitForAsync((): void => {
    store = createMockStore();
    vi.mocked(store.select).mockReturnValue(of(mockSkills));
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, PanelComponent],
      providers: [
        ...getTranslocoTestProviders(),
        {
          provide: Store,
          useValue: store,
        },
      ],
    }).compileComponents();
    componentFixture = TestBed.createComponent(SkillsComponent);
    skillsComponent = componentFixture.componentInstance;
    changeDetectorRef = skillsComponent['changeDetectorRef'];
    vi.spyOn(changeDetectorRef, 'markForCheck');
  }));

  afterEach((): void => {
    vi.clearAllMocks();
  });

  it('should create', (): void => {
    expect(skillsComponent).toBeTruthy();
  });

  it('should subscribe to skills from store on ngAfterViewInit', (): void => {
    skillsComponent.ngAfterViewInit();
    expect(store.select).toHaveBeenCalled();
    expect(skillsComponent['skills']).toHaveLength(4);
    expect(skillsComponent['clones']).toEqual(mockSkills);
    expect(changeDetectorRef.markForCheck).toHaveBeenCalled();
  });

  it('should initialize skills with zero rates', (): void => {
    skillsComponent.ngAfterViewInit();
    skillsComponent['skills'].forEach((skill: Skill) => {
      expect(skill.rate).toBe(0);
      expect(mockSkills.some((mockSkill) => mockSkill.name === skill.name)).toBe(true);
    });
  });

  it('should set shouldSetupObserver flag when skills are loaded', (): void => {
    expect(skillsComponent['shouldSetupObserver']).toBe(false);
    skillsComponent.ngAfterViewInit();
    expect(skillsComponent['shouldSetupObserver']).toBe(true);
  });

  describe('ngAfterViewChecked', (): void => {
    beforeEach((): void => {
      skillsComponent.ngAfterViewInit();
    });

    it('should not setup observer if shouldSetupObserver is false', (): void => {
      skillsComponent['shouldSetupObserver'] = false;
      vi.spyOn(skillsComponent as any, '_setupIntersectionObserver');
      skillsComponent.ngAfterViewChecked();
      expect(skillsComponent['_setupIntersectionObserver']).not.toHaveBeenCalled();
    });

    it('should not setup observer if observer already exists', (): void => {
      const mockObserver = {
        disconnect: vi.fn(),
        observe: vi.fn(),
        unobserve: vi.fn(),
      } as unknown as IntersectionObserver;
      skillsComponent['intersectionObserver'] = mockObserver;
      vi.spyOn(skillsComponent as any, '_setupIntersectionObserver');
      skillsComponent.ngAfterViewChecked();
      expect(skillsComponent['_setupIntersectionObserver']).not.toHaveBeenCalled();
    });

    it('should not setup observer if no clones exist', (): void => {
      skillsComponent['clones'] = [];
      vi.spyOn(skillsComponent as any, '_setupIntersectionObserver');
      skillsComponent.ngAfterViewChecked();
      expect(skillsComponent['_setupIntersectionObserver']).not.toHaveBeenCalled();
    });
  });

  describe('_animateSkills', (): void => {
    beforeEach((): void => {
      skillsComponent.ngAfterViewInit();
      vi.clearAllMocks();
    });

    it('should animate skills by setting rates from clones', (): void => {
      skillsComponent['_animateSkills']();
      skillsComponent['skills'].forEach((skill: Skill) => {
        const cloneSkill = mockSkills.find((clone) => clone.name === skill.name);
        expect(skill.rate).toBe(cloneSkill?.rate || 0);
      });
      expect(changeDetectorRef.markForCheck).toHaveBeenCalled();
    });

    it('should set rate to 0 for skills not found in clones', (): void => {
      skillsComponent['skills'] = [{ name: 'Unknown Skill', rate: 50 }];
      skillsComponent['_animateSkills']();
      expect(skillsComponent['skills'][0].rate).toBe(0);
    });
  });

  describe('_checkSkillIntersection', (): void => {
    beforeEach((): void => {
      skillsComponent.ngAfterViewInit();
      vi.clearAllMocks();
    });

    it('should animate skills when intersecting and clones exist', (): void => {
      const mockEntry = { isIntersecting: true } as IntersectionObserverEntry;
      vi.spyOn(skillsComponent as any, '_animateSkills');
      skillsComponent['_checkSkillIntersection'](mockEntry);
      expect(skillsComponent['_animateSkills']).toHaveBeenCalled();
    });

    it('should not animate skills when intersecting but no clones exist', (): void => {
      const mockEntry = { isIntersecting: true } as IntersectionObserverEntry;
      skillsComponent['clones'] = [];
      vi.spyOn(skillsComponent as any, '_animateSkills');
      skillsComponent['_checkSkillIntersection'](mockEntry);
      expect(skillsComponent['_animateSkills']).not.toHaveBeenCalled();
    });

    it('should reset skill rates to 0 when not intersecting', (): void => {
      const mockEntry = { isIntersecting: false } as IntersectionObserverEntry;
      skillsComponent['_checkSkillIntersection'](mockEntry);
      skillsComponent['skills'].forEach((skill: Skill) => expect(skill.rate).toBe(0));
      expect(changeDetectorRef.markForCheck).toHaveBeenCalled();
    });
  });

  describe('_checkInitialVisibility', (): void => {
    beforeEach((): void => {
      skillsComponent.ngAfterViewInit();
    });

    it('should animate skills when element is initially visible', (): void => {
      const mockElement = {
        getBoundingClientRect: vi.fn().mockReturnValue({
          top: 100,
          bottom: 200,
        }),
      } as unknown as Element;
      Object.defineProperty(window, 'innerHeight', { value: 500, writable: true });
      vi.spyOn(skillsComponent as any, '_animateSkills');
      skillsComponent['_checkInitialVisibility'](mockElement);
      expect(skillsComponent['_animateSkills']).toHaveBeenCalled();
    });

    it('should not animate skills when element is not visible', (): void => {
      const mockElement = {
        getBoundingClientRect: vi.fn().mockReturnValue({
          top: 600,
          bottom: 700,
        }),
      } as unknown as Element;
      Object.defineProperty(window, 'innerHeight', { value: 500, writable: true });
      vi.spyOn(skillsComponent as any, '_animateSkills');
      skillsComponent['_checkInitialVisibility'](mockElement);
      expect(skillsComponent['_animateSkills']).not.toHaveBeenCalled();
    });

    it('should not animate skills when no clones exist', (): void => {
      const mockElement = {
        getBoundingClientRect: vi.fn().mockReturnValue({
          top: 100,
          bottom: 200,
        }),
      } as unknown as Element;
      skillsComponent['clones'] = [];
      Object.defineProperty(window, 'innerHeight', { value: 500, writable: true });
      vi.spyOn(skillsComponent as any, '_animateSkills');
      skillsComponent['_checkInitialVisibility'](mockElement);
      expect(skillsComponent['_animateSkills']).not.toHaveBeenCalled();
    });
  });

  describe('ngOnDestroy', (): void => {
    it('should disconnect intersection observer on destroy', (): void => {
      const mockObserver = {
        disconnect: vi.fn(),
        observe: vi.fn(),
        unobserve: vi.fn(),
      } as unknown as IntersectionObserver;
      skillsComponent['intersectionObserver'] = mockObserver;
      skillsComponent.ngOnDestroy();
      expect(mockObserver.disconnect).toHaveBeenCalled();
    });

    it('should handle destroy when no intersection observer exists', (): void => {
      skillsComponent['intersectionObserver'] = undefined;
      expect(() => skillsComponent.ngOnDestroy()).not.toThrow();
    });
  });

  describe('IntersectionObserver integration', (): void => {
    beforeEach((): void => {
      skillsComponent.ngAfterViewInit();
    });

    it('should create intersection observer with correct configuration', (): void => {
      const mockElement = document.createElement('div');
      vi.spyOn(document, 'querySelector').mockReturnValue(mockElement);
      skillsComponent['_setupIntersectionObserver']();
      expect(skillsComponent['intersectionObserver']).toBeDefined();
      expect(skillsComponent['intersectionObserver']).toBeInstanceOf(IntersectionObserver);
    });

    it('should handle case when skills element is not found', (): void => {
      vi.spyOn(document, 'querySelector').mockReturnValue(null);
      skillsComponent['_setupIntersectionObserver']();
      expect(skillsComponent['intersectionObserver']).toBeDefined();
    });
  });
});
