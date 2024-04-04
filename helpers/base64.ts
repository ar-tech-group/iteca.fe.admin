/**
 * Кодируем строку в base64.
 *
 * @param {string} value
 * @returns string
 */
export const encode = (value: string) => btoa(value);

/**
 * Декодирум строку из base64.
 */
export const decode = (value: string) => atob(value);
