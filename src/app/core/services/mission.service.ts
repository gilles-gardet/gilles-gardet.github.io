import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable, of, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Mission, MissionDescriptionType } from '@core/models/mission.model';
import { switchMap } from 'rxjs/operators';
import { EMPTY_STRING } from '@core/utils/string.utils';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private readonly translocoService: TranslocoService = inject(TranslocoService);
  private readonly httpClient: HttpClient = inject(HttpClient);

  private readonly baseUrl: string = `${environment.cdnUrl}/src/assets/resume`;
  private missions$?: Observable<Mission[]>;

  /**
   * Retrieve the mission from the passed date
   *
   * @param startingDate the starting date of the mission
   * @param type the type of mardown file to fetch
   * @return description the mission description we want to display
   */
  public missionFromDate(startingDate: string, type: MissionDescriptionType): string {
    const date: Date = new Date(startingDate);
    const month: string = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const language: string = this.translocoService.getActiveLang();
    return `${
      this.baseUrl
    }/missions/${language}/${date.getFullYear()}${month}/${date.getFullYear()}${month}_${type}.md`;
  }

  /**
   * Retrieve the missions from the json file stored in the repository assets folder
   *
   * @return missions the list of missions wrapped in an observable
   */
  public fetchMissions$(): Observable<Mission[]> {
    if (!this.missions$) {
      this.missions$ = this.httpClient.get<Mission[]>(`${this.baseUrl}/missions.json`).pipe(
        switchMap((missions: Mission[]) => {
          const missionsWithDescription$: Observable<Mission>[] = missions.map((mission: Mission) => {
            const url: string = this.missionFromDate(mission.startDate, 'light');
            return this.fetchEnrichedMission$(url, mission);
          });
          return forkJoin([...missionsWithDescription$]);
        }),
        shareReplay(1),
      );
    }
    return this.missions$;
  }

  /**
   * Fetch the mission description from the given url and enrich the given mission with it
   *
   * @param url the url from which the mission description will be fetched
   * @param mission the mission to be enriched
   * @return the enriched mission
   */
  public fetchEnrichedMission$(url: string, mission: Mission): Observable<Mission> {
    return this.httpClient.get(url, { responseType: 'text' }).pipe(
      switchMap((description: string) => {
        return of({
          ...mission,
          timelapse: this.missionTimelapse(mission.startDate, mission.endDate),
          description: description,
        });
      }),
    );
  }

  /**
   * Construct the date to timelapse to be displayed on a mission
   *
   * @param start the date (string) on which the mission started
   * @param end the date (string) on which the mission ended
   * @return the label representing the mission timelapse
   */
  private missionTimelapse(start: string, end?: string): string {
    if (end)
      return `${this.formatDate(new Date(start))} - ${this.formatDate(new Date(end))} (${this.missionDuration(
        start,
        end,
      )})`;
    const onGoingLabel: string = this.translocoService.getActiveLang() === 'fr' ? 'en cours' : 'ongoing';
    return `${this.formatDate(new Date(start))} - ${onGoingLabel} (${this.missionDuration(start, end)})`;
  }

  /**
   * Format the given date and return it as a string
   *
   * @param date the date
   * @return the formated date
   */
  private formatDate(date: Date): string {
    const addTwoDigits = (number: number): string => (number < 10 ? `0${number}` : `${number}`);
    return `${addTwoDigits(date.getDate())}/${addTwoDigits(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  /**
   * Calculate the mission duration
   *
   * @param {string} start the date on which the mission started
   * @param {string} end the date on which the mission ended
   * @return label representing the mission duration
   */
  private missionDuration(start: string, end?: string): string {
    const startTimestamp: number = Date.parse(start);
    const startDate: Date = new Date(startTimestamp);
    const { yearLabel, monthLabel, andLabel } = this.getTranslatedLabels();
    let endDate: Date = new Date(Date.now());
    if (end) {
      const endTimestamp: number = Date.parse(end);
      endDate = new Date(endTimestamp);
    }
    const monthsBetweenDates: number = this.monthBetweenDates(startDate, endDate);
    if (monthsBetweenDates > 12 && monthsBetweenDates % 12 > 0) {
      const years: number = Math.trunc(monthsBetweenDates / 12);
      const months: number = monthsBetweenDates % 12;
      return `${years} ${yearLabel}${years > 1 ? 's' : EMPTY_STRING} ${andLabel} ${months} ${monthLabel}`;
    }
    if (monthsBetweenDates % 12 === 0) {
      const years: number = Math.trunc(monthsBetweenDates / 12);
      return `${years} ${yearLabel}${years > 1 ? 's' : EMPTY_STRING}`;
    }
    return `${monthsBetweenDates} ${monthLabel}`;
  }

  /**
   * Get the translated labels used on the mission's subheader to display the duration of this mission.
   *
   * @return the translated labels
   */
  private getTranslatedLabels(): { yearLabel: string; monthLabel: string; andLabel: string } {
    if (this.translocoService.getActiveLang() === 'fr') {
      return { yearLabel: 'an', monthLabel: 'mois', andLabel: 'et' };
    }
    return { yearLabel: 'year', monthLabel: 'months', andLabel: 'and' };
  }

  /**
   * Calculate the number of month between two dates
   *
   * @param {Date} start the starting date
   * @param {Date} end the ending date
   * @return number representing the number of months
   */
  private monthBetweenDates(start: Date, end: Date): number {
    let months: number;
    months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += end.getMonth();
    return months <= 0 ? 0 : months;
  }

  /**
   * Clear the missions cache
   */
  public clearCache(): void {
    this.missions$ = undefined;
  }
}
