import { TestBed, waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { LanguageService } from '@core/services/language.service';

describe('LanguageService', (): void => {
  let service: LanguageService;

  beforeEach(waitForAsync((): void => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [LanguageService],
    });
    service = TestBed.inject(LanguageService);
  }));

  it('should create', async (): Promise<void> => {
    expect(service).toBeTruthy();
  });
});
