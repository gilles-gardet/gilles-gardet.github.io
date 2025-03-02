import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Skill } from '@core/models/skill.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly baseUrl: string = `${environment.cdnUrl}/src/assets/resume`;

  /**
   * Retrieve the skills from the json file stored in the repository assets folder
   *
   * @return skills the list of skills wrapped in an observable
   */
  public fetchSkills$(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.baseUrl}/skills.json`).pipe(shareReplay(1));
  }
}
