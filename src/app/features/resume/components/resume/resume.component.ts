import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, of, Subject, zip } from 'rxjs';
import { MarkdownService } from 'ngx-markdown';
import { map, takeUntil } from 'rxjs/operators';
import missions from '@assets/resume/missions.json';
import skills from '@assets/resume/skills.json';
import { BaseMission } from '@core/abstractions/mission.abstract';

@Component({
  selector: 'portfolio-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent extends BaseMission implements OnInit, OnDestroy {
  private _unsubscribe$ = new Subject();
  selectedMission: any = null;
  missions: any[] = [];
  skills: any[] = [];
  clones: any[] = [];
  displayDialog = false;
  loading = true;
  innerFullMission: string = '';
  innerLightMission: string = '';

  /**
   * Constructor
   */
  constructor(private markdownService: MarkdownService) {
    super();
  }

  /**
   * @inheritDoc
   */
  ngOnInit(): void {
    const missions$ = of(missions);
    const skills$ = of(skills);
    zip(missions$, skills$)
      .pipe(map(([missions, skills]: [any, any]) => ({ missions, skills })))
      .subscribe((result: { missions: any[]; skills: any[] }) => {
        this.missions = result.missions;
        this.skills = result.skills;
        this.clones = result.skills;
        this.skills = result.skills.map((skill) => ({ name: skill.name, rate: 0 }));
      });
  }

  /**
   * Open the details dialog
   */
  openDialog(mission: any): void {
    this.displayDialog = true;
    this.selectedMission = mission;
  }

  /**
   * Re-initialize the loader of the dialog content
   */
  onDialogHiding(): void {
    this.loading = true;
  }

  /**
   * Parse the markdown contained in the selected mission file
   */
  onMissionLoading(): void {
    const fullMission: Observable<string> = this.markdownService.getSource(
      this.missionFromDate(this.selectedMission?.startDate, 'full')
    );
    const lightMission: Observable<string> = this.markdownService.getSource(
      this.missionFromDate(this.selectedMission?.startDate, 'light')
    );
    forkJoin({ lightMission, fullMission })
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((value) => {
        this.innerLightMission = this.markdownService.compile(value.lightMission);
        this.innerFullMission = this.markdownService.compile(value.fullMission);
        setTimeout(() => {
          this.loading = false;
          document
            .querySelector('p-dialog > .p-dialog-mask > .p-dialog > .p-dialog-content')
            ?.classList.add('p-dialog-content-scroll');
        }, 600);
      });
  }

  /**
   * @inheritDoc
   */
  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.unsubscribe();
  }
}
