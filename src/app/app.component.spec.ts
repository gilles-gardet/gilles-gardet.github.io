import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { MarkdownModule } from 'ngx-markdown';
import { ResumeModule } from '@features/resume/resume.module';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SharedModule } from '@shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APP_BASE_HREF } from '@angular/common';
import { ContactModule } from '@features/contact/contact.module';

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => null,
}));

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [
          AppRoutingModule,
          BrowserAnimationsModule,
          BrowserModule,
          ContactModule,
          CoreModule,
          HttpClientTestingModule,
          MarkdownModule.forRoot(),
          ResumeModule,
          ScrollTopModule,
          SharedModule,
        ],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      }).compileComponents();
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
