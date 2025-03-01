import { Mission } from '@core/models/mission.model';

/**
 * Interface for the 'Missions' data
 */
export interface MissionState {
  missions: Mission[];
  selectedMission: Mission | null;
  loading: boolean;
  error: string | null;
}
