export type Language = 'fr' | 'en';

/**
 * Return the opposite language for the language switcher link.
 *
 * @param lang the current language
 * @returns the alternate language
 */
export function otherLang(lang: Language): Language {
  return lang === 'fr' ? 'en' : 'fr';
}

/**
 * Format a date as DD/MM/YYYY.
 *
 * @param date the date to format
 */
export function formatDate(date: Date): string {
  const pad = (n: number): string => (n < 10 ? `0${n}` : `${n}`);
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
}

/**
 * Calculate the number of months between two dates.
 *
 * @param start the start date
 * @param end the end date
 */
function monthsBetween(start: Date, end: Date): number {
  const months = (end.getFullYear() - start.getFullYear()) * 12 - start.getMonth() + end.getMonth();
  return months <= 0 ? 0 : months;
}

/**
 * Return a human-readable duration label (e.g. "2 ans et 3 mois").
 *
 * @param lang the active language
 * @param start the ISO start date string
 * @param end the ISO end date string, or undefined if ongoing
 */
export function missionDuration(lang: Language, start: string, end?: string | null): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const total = monthsBetween(startDate, endDate);
  const yearLabel = lang === 'fr' ? 'an' : 'year';
  const monthLabel = lang === 'fr' ? 'mois' : 'months';
  const andLabel = lang === 'fr' ? 'et' : 'and';
  if (total % 12 === 0) {
    const years = total / 12;
    return `${years} ${yearLabel}${years > 1 ? 's' : ''}`;
  }
  if (total > 12) {
    const years = Math.trunc(total / 12);
    const months = total % 12;
    return `${years} ${yearLabel}${years > 1 ? 's' : ''} ${andLabel} ${months} ${monthLabel}`;
  }
  return `${total} ${monthLabel}`;
}

/**
 * Build the timelapse label shown under a mission title.
 *
 * @param lang the active language
 * @param start the ISO start date string
 * @param end the ISO end date string, or null/undefined if ongoing
 */
export function missionTimelapse(lang: Language, start: string, end?: string | null): string {
  const startLabel = formatDate(new Date(start));
  const duration = missionDuration(lang, start, end);
  if (end) {
    return `${startLabel} - ${formatDate(new Date(end))} (${duration})`;
  }
  const ongoingLabel = lang === 'fr' ? 'en cours' : 'ongoing';
  return `${startLabel} - ${ongoingLabel} (${duration})`;
}
