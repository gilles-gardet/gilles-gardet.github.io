export const EMPTY_STRING = '';

/**
 * Check wether or not the string value is empty.
 *
 * @param value the string value to be checked
 * @return a flag true if the string is empty, false otherwise
 */
export const isEmpty = (value: string): boolean => !value || value.length === 0;

/**
 * Check wether or not the string value is blank
 *
 * @param value the string value to be checked
 * @return a flag true if the string is blank, false otherwise
 */
export const isBlank = (value: string): boolean => !value || /^\s*$/.test(value);
