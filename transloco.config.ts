import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

/**
 * Configuration used by tools & plugins such as the scoped lib extractor and the keys-manager
 */
const config: TranslocoGlobalConfig = {
  rootTranslationsPath: './src/i18n/',
  langs: ['fr', 'en'],
  defaultLang: 'en',
  keysManager: {},
};

export default config;
