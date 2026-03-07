import i18n, { type Config } from 'sveltekit-i18n';

const config: Config<Record<string, unknown>> = {
  loaders: [
    {
      locale: 'fr',
      key: 'cv',
      loader: async () => {
        const { default: data } = await import('./fr.json');
        return data.cv;
      },
    },
    {
      locale: 'en',
      key: 'cv',
      loader: async () => {
        const { default: data } = await import('./en.json');
        return data.cv;
      },
    },
  ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
