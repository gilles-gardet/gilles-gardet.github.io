import { Mission } from '@core/models/mission.model';

/**
 * Interface for the 'Missions' data
 */
export interface MissionsState {
  missions: Mission[];
  selectedMission: Mission | null;
  loading: boolean;
  error: string | null;
}
