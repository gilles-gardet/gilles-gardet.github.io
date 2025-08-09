import { Store } from '@ngrx/store';
import { of } from 'rxjs';

/**
 * Creates a mock NgRx Store for testing
 */
export function createMockStore() {
  // Mock skills array for SkillsComponent  
  const mockSkills = [
    { name: 'Angular', rate: 90 },
    { name: 'TypeScript', rate: 85 },
  ];

  return {
    select: vi.fn().mockReturnValue(of(mockSkills)),
    selectSnapshot: vi.fn().mockReturnValue(mockSkills),
    selectSignal: vi.fn().mockReturnValue(() => mockSkills),
    dispatch: vi.fn(),
    pipe: vi.fn().mockReturnValue(of(mockSkills)),
    subscribe: vi.fn(),
    lift: vi.fn(),
    state: of(mockSkills),
  };
}

/**
 * Provides a mock Store for TestBed configuration
 */
export function getMockStoreProvider() {
  return {
    provide: Store,
    useValue: createMockStore(),
  };
}