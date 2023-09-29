export interface Mission {
  client: string;
  startDate: string;
  endDate?: string;
  timelapse?: string;
  description?: string;
}

export type MissionDescriptionType = 'light' | 'full';
