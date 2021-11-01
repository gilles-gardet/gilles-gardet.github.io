import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Config } from '../domains/config.interface';

@Injectable()
export class ConfigService {
  private _configUpdate = new Subject<Config>();
  config: Config = {
    theme: 'saga-blue',
    dark: false,
    inputStyle: 'outlined',
    ripple: true,
  };
  configUpdate$ = this._configUpdate.asObservable();

  /**
   *
   * @param config
   */
  updateConfig(config: Config) {
    this.config = config;
    this._configUpdate.next(config);
  }

  /**
   *
   */
  getConfig() {
    return this.config;
  }
}
