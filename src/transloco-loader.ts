import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private httpClient = inject(HttpClient);

    /**
     * Load translation for selected language.
     *
     * @param language the chosen language
     */
    getTranslation(language: string): Observable<Translation> {
        return this.httpClient.get<Translation>(`/i18n/${language}.json`);
    }
}

