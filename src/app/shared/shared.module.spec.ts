import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from "@ngx-translate/core";

describe('SharedModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, TranslateModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should create', () => {
    const module = TestBed.inject(SharedModule);
    expect(module).toBeTruthy();
  });
});
