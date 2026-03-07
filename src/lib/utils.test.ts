import { afterEach, describe, expect, it, vi } from 'vitest';
import { formatDate, missionDuration, missionTimelapse, otherLang } from '$lib/utils';

describe('otherLang', () => {
  it('returns en for fr', () => {
    expect(otherLang('fr')).toBe('en');
  });

  it('returns fr for en', () => {
    expect(otherLang('en')).toBe('fr');
  });
});

describe('formatDate', () => {
  it('pads single-digit day and month with a leading zero', () => {
    expect(formatDate(new Date(2024, 0, 5))).toBe('05/01/2024');
  });

  it('does not pad two-digit day and month', () => {
    expect(formatDate(new Date(2024, 10, 15))).toBe('15/11/2024');
  });

  it('formats the last day of the year correctly', () => {
    expect(formatDate(new Date(2023, 11, 31))).toBe('31/12/2023');
  });
});

describe('missionDuration', () => {
  it('returns "X mois" for less than 12 months in French', () => {
    expect(missionDuration('fr', '2024-01-01', '2024-07-01')).toBe('6 mois');
  });

  it('returns "X months" for less than 12 months in English', () => {
    expect(missionDuration('en', '2024-01-01', '2024-07-01')).toBe('6 months');
  });

  it('returns "1 an" for exactly 12 months in French', () => {
    expect(missionDuration('fr', '2023-01-01', '2024-01-01')).toBe('1 an');
  });

  it('returns "1 year" for exactly 12 months in English', () => {
    expect(missionDuration('en', '2023-01-01', '2024-01-01')).toBe('1 year');
  });

  it('returns "2 ans" for exactly 24 months in French', () => {
    expect(missionDuration('fr', '2022-01-01', '2024-01-01')).toBe('2 ans');
  });

  it('returns "2 years" for exactly 24 months in English', () => {
    expect(missionDuration('en', '2022-01-01', '2024-01-01')).toBe('2 years');
  });

  it('returns "1 an et X mois" for 15 months in French', () => {
    expect(missionDuration('fr', '2023-01-01', '2024-04-01')).toBe('1 an et 3 mois');
  });

  it('returns "1 year and X months" for 15 months in English', () => {
    expect(missionDuration('en', '2023-01-01', '2024-04-01')).toBe('1 year and 3 months');
  });

  it('returns "2 ans et X mois" for 27 months in French', () => {
    expect(missionDuration('fr', '2022-01-01', '2024-04-01')).toBe('2 ans et 3 mois');
  });

  it('returns "0 an" when start and end dates are identical', () => {
    expect(missionDuration('fr', '2024-01-01', '2024-01-01')).toBe('0 an');
  });
});

describe('missionTimelapse', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns "start - end (duration)" when an end date is provided', () => {
    expect(missionTimelapse('fr', '2023-01-01', '2024-01-01')).toBe('01/01/2023 - 01/01/2024 (1 an)');
  });

  it('returns the English format when an end date is provided', () => {
    expect(missionTimelapse('en', '2023-01-01', '2024-04-01')).toBe('01/01/2023 - 01/04/2024 (1 year and 3 months)');
  });

  it('returns "start - en cours (duration)" for an ongoing mission in French', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-07-01T00:00:00Z'));
    expect(missionTimelapse('fr', '2024-01-01')).toBe('01/01/2024 - en cours (6 mois)');
  });

  it('returns "start - ongoing (duration)" for an ongoing mission in English', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-07-01T00:00:00Z'));
    expect(missionTimelapse('en', '2024-01-01')).toBe('01/01/2024 - ongoing (6 months)');
  });
});
