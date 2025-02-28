import { MissionsState } from './missions/missions.state';

// Global state managed by Ngrx
export interface AppState {
  missionsState: MissionsState;
}
