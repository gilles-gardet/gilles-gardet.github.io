import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { SidebarModule } from '@features/sidebar/sidebar.module';

describe('SidebarModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidebarModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should create', () => {
    const module = TestBed.inject(SidebarModule);
    expect(module).toBeTruthy();
  });
});
