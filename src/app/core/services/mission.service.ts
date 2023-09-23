import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, shareReplay } from 'rxjs';
import { Skill } from '@core/models/skill.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Mission } from '@core/models/mission.model';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private readonly translateService: TranslateService = inject(TranslateService);
  private readonly httpClient: HttpClient = inject(HttpClient);

  private readonly baseUrl: string = `${environment.cdnUrl}/src/assets/resume`;
  private missions$?: Observable<Mission[]>;
  private skills$?: Observable<Skill[]>;

  /**
   * Retrieve the mission from the passed date
   *
   * @param startingDate the starting date of the mission
   * @param type the type of mardown file to fetch
   * @return description the mission description we want to display
   */
  missionFromDate(startingDate: string, type: string): string {
    const date: Date = new Date(startingDate);
    const month: string = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const language: string = this.translateService.currentLang;
    return `${
      this.baseUrl
    }/missions/${language}/${date.getFullYear()}${month}/${date.getFullYear()}${month}_${type}.md`;
  }

  /**
   * Retrieve the missions from the json file stored in the repository assets folder
   *
   * @return missions the list of missions wrapped in an observable
   */
  fetchMissions$(): Observable<Mission[]> {
    if (!this.missions$) {
      this.missions$ = this.httpClient.get<Mission[]>(`${this.baseUrl}/missions.json`).pipe(shareReplay(1));
    }
    return this.missions$;
  }

  /**
   * Retrieve the skills from the json file stored in the repository assets folder
   *
   * @return skills the list of skills wrapped in an observable
   */
  fetchSkills$(): Observable<Skill[]> {
    if (!this.skills$) {
      this.skills$ = this.httpClient.get<Skill[]>(`${this.baseUrl}/skills.json`).pipe(shareReplay(1));
    }
    return this.skills$;
  }
}
