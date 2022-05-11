import { BaseMission } from '@core/abstractions/mission.abstract';

describe('BaseMission', () => {
  const baseMission = new BaseMission();

  it(`should get the path of the full mardown file related to a mission's date`, async () => {
    const path = baseMission.missionFromDate('2019-01-01', 'full');
    expect(path).toEqual('/assets/resume/missions/201901/201901_full.md');
  });

  it(`should get the path of the light mardown file related to a mission's date`, async () => {
    const path = baseMission.missionFromDate('2019-01-01', 'light');
    expect(path).toEqual('/assets/resume/missions/201901/201901_light.md');
  });

  it(`should get the timelapse label of a mission`, async () => {
    const start: Date = new Date('2018-10-02');
    const end: Date = new Date('2022-04-16');
    const timelapseDone = baseMission.missionTimelapse(start.toDateString(), end.toDateString());
    expect(timelapseDone).toEqual('02/10/2018 - 16/04/2022 (3 ans et 6 mois)');
    const timelapseCurrent = baseMission.missionTimelapse(start.toDateString());
    expect(timelapseCurrent).toEqual('02/10/2018 - en cours (3 ans et 7 mois)');
  });

  it(`should format the given date to be human readable`, async () => {
    const firstDate: Date = new Date('2018-10-02');
    const firstFormatedDate = baseMission.formatDate(firstDate);
    expect(firstFormatedDate).toEqual('02/10/2018');
    const secondDate: Date = new Date('2022-04-16');
    const secondFormatedDate = baseMission.formatDate(secondDate);
    expect(secondFormatedDate).toEqual('16/04/2022');
  });

  it(`should provide the mission duration label in months`, async () => {
    const start: Date = new Date('2018-10-02');
    const end: Date = new Date('2022-04-16');
    const missionDuration = baseMission.missionDuration(start.toDateString());
    expect(missionDuration).toEqual('3 ans et 7 mois');
    const missionWithEndDuration = baseMission.missionDuration(start.toDateString(), end.toDateString());
    expect(missionWithEndDuration).toEqual('3 ans et 6 mois');
  });

  it(`should provide the mission duration number in months`, async () => {
    const start: Date = new Date('2018-10-02');
    const end: Date = new Date('2022-04-16');
    const missionDuration = baseMission.monthBetweenDates(start, end);
    expect(missionDuration).toBe(42);
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});
