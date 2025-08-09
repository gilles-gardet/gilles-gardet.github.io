import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from '@features/resume/components/details/details.component';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { Store } from '@ngrx/store';
import { getTranslocoTestProviders } from '@core/testing/transloco-test.helper';
import { createMockStore } from '@core/testing/ngrx-test.helper';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('DetailsComponent', (): void => {
  let detailsComponent: DetailsComponent;
  let markdownService: MarkdownService;
  let componentFixture: ComponentFixture<DetailsComponent>;
  const store = createMockStore();

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CommonModule, MarkdownModule.forRoot()],
      providers: [
        ...getTranslocoTestProviders(),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: Store,
          useValue: store,
        },
      ]
    }).compileComponents();
    componentFixture = TestBed.createComponent(DetailsComponent);
    detailsComponent = componentFixture.componentInstance;
    markdownService = TestBed.inject(MarkdownService);
    componentFixture.detectChanges();
  }));

  it('should create', async (): Promise<void> => {
    expect(detailsComponent).toBeTruthy();
  });
});