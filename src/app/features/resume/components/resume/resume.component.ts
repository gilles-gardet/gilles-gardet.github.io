import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mission } from '@core/models/mission.model';
import { Skill } from '@core/models/skill.model';
import { HobbiesComponent } from '@features/resume/components/hobbies/hobbies.component';
import { MissionsComponent } from '@features/resume/components/missions/missions.component';
import { SharedModule } from '@shared/shared.module';
import { SkillsComponent } from '@features/resume/components/skills/skills.component';
import { SummaryComponent } from '@features/resume/components/summary/summary.component';
import { DetailsComponent } from '@features/resume/components/details/details.component';
import { TranslateService } from '@ngx-translate/core';
import { MissionService } from '@core/services/mission.service';

type SkillAndMissions = { missions: Mission[]; skills: Skill[] };

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DetailsComponent, HobbiesComponent, MissionsComponent, SharedModule, SkillsComponent, SummaryComponent],
  selector: 'cv-resume',
  standalone: true,
  styleUrls: ['./resume.component.scss'],
  templateUrl: './resume.component.html',
})
export class ResumeComponent implements OnInit, OnDestroy {
  private readonly missionService: MissionService = inject(MissionService);
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  protected unsubscribe$: Subject<unknown> = new Subject();
  protected selectedMission: Mission = {} as Mission;
  protected missions: Mission[] = [];
  protected skills: Skill[] = [];
  protected clones: Skill[] = [];
  protected displayDialog = false;

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    const missions$: Observable<Mission[]> = this.missionService.fetchMissions$()
    const skills$: Observable<Skill[]> = this.missionService.fetchSkills$();
    zip(missions$, skills$)
      .pipe(
        map(
          ([missions, skills]: [Mission[], Skill[]]): SkillAndMissions => ({
            missions,
            skills,
          }),
        ),
      )
      .subscribe((result: SkillAndMissions): void => {
        this.missions = result.missions;
        this.skills = result.skills;
        this.clones = result.skills;
        this.skills = result.skills.map((skill: Skill): Skill => ({ name: skill.name, rate: 0 }));
        this.changeDetectorRef.markForCheck();
      });
  }

  /**
   * Change the close dialog flag when the details' dialog component was closed from itself.
   */
  onDetailsClose(): void {
    this.displayDialog = false;
  }

  /**
   * Open the details dialog
   */
  openDialog(mission: Mission): void {
    this.displayDialog = true;
    this.selectedMission = mission;
  }

  /**
   * @inheritDoc
   */
  ngOnDestroy(): void {
    this.unsubscribe$.next(EMPTY);
    this.unsubscribe$.unsubscribe();
  }
}
