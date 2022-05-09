import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should create', () => {
    const module = TestBed.inject(AppRoutingModule);
    expect(module).toBeTruthy();
  });
});
