import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryComponent } from '@features/resume/components/summary/summary.component';
import { TranslateModule } from "@ngx-translate/core";

describe('SummaryComponent', () => {
  let summaryComponent: SummaryComponent;
  let componentFixture: ComponentFixture<SummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, PanelModule, TranslateModule.forRoot()],
    }).compileComponents();
    componentFixture = TestBed.createComponent(SummaryComponent);
    summaryComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async () => {
    expect(summaryComponent).toBeTruthy();
  });

  it(`should get the number of years between a given date and the current date`, async () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-04-16'));
    const date: Date = new Date('2018-10-02');
    const years = summaryComponent.numberOfYearsFromDateToCurrentDate(date);
    expect(years).toBe(4);
  });
});
