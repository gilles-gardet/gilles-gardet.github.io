import type { LayoutLoad } from './$types';
import { loadTranslations } from '$lib/i18n/translations';

export const load: LayoutLoad = async ({ params, url }) => {
  await loadTranslations(params.lang, url.pathname);
  return {};
};
