import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Mission } from '@core/models/mission.model';

export const MissionsActions = createActionGroup({
  source: 'Missions',
  events: {
    loadMissions: emptyProps(),
    loadMissionsSuccess: props<{ missions: Mission[] }>(),
    loadMissionsFailure: props<{ error: string }>(),
    selectMission: props<{ mission: Mission }>(),
  },
});
