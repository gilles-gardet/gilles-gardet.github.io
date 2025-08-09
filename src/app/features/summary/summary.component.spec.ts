import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryComponent } from '@features/summary/summary.component';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';

describe('SummaryComponent', (): void => {
  let summaryComponent: SummaryComponent;
  let componentFixture: ComponentFixture<SummaryComponent>;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, PanelComponent],
      providers: [
        ...getTranslocoTestProviders(),
      ]
    }).compileComponents();
    componentFixture = TestBed.createComponent(SummaryComponent);
    summaryComponent = componentFixture.componentInstance;
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(summaryComponent).toBeTruthy();
  });

  it(`should get the number of years between a given date and the current date`, async (): Promise<void> => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2022-04-16'));
    const date: Date = new Date('2018-10-02');
    const years: number = summaryComponent.numberOfYearsFromDateToCurrentDate(date);
    expect(years).toBe(4);
    vi.useRealTimers();
  });
});
