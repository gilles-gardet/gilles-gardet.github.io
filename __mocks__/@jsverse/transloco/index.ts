import { of } from 'rxjs';
import { Directive, inject, Pipe, PipeTransform, TemplateRef, ViewContainerRef } from '@angular/core';

export const TranslocoService = jest.fn(() => ({
  selectTranslate: jest.fn(() => of('mocked translated value!')),
}));

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[transloco]', standalone: true })
export class TranslocoDirective {
  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainer = inject(ViewContainerRef);

  constructor() {
    this.viewContainer.createEmbeddedView(this.templateRef, {
      $implicit: (key: string) => `Translation from fake directive: ${key}`,
    });
  }
}

@Pipe({ name: 'fake-transloco-pipe', standalone: true })
export class TranslocoPipe implements PipeTransform {
  transform(): string {
    return 'Translation from fake pipe';
  }
}

const actualModule = jest.requireActual('@jsverse/transloco');
export const TranslocoModule = actualModule.TranslocoModule;
export const provideTransloco = actualModule.provideTransloco;
export const provideTranslocoScope = actualModule.provideTranslocoScope;
export const TRANSLOCO_SCOPE = actualModule.TRANSLOCO_SCOPE;
