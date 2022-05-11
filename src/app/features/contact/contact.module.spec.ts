import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { ContactModule } from '@features/contact/contact.module';

describe('ContactModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContactModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should create', () => {
    const module = TestBed.inject(ContactModule);
    expect(module).toBeTruthy();
  });
});
