import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { getTranslocoModule } from "../../__mock/transloco-testing.module";

describe('SharedModule', (): void => {
  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [SharedModule, getTranslocoModule()],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should create', (): void => {
    const module: SharedModule = TestBed.inject(SharedModule);
    expect(module).toBeTruthy();
  });
});
