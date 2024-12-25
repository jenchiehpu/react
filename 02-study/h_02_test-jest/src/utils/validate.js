export const add = (a, b) => {
  return a + b;
};

/* eslint no-useless-escape:0 */
const EMAIL_PATTERN = /^([A-Za-z0-9_\-\.+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

/**
 * 是否為有效的 email
 * @param {string} email
 * @returns {string}
 */
export function isEmail(email: string): boolean {
  return !email ? false : EMAIL_PATTERN.test(email);
}

// https://regex101.com/r/2VuGDP/1
const BIRTHDAY_PATTERN =
  /^(?:19|20)\d{2}\/([1-9]{1}|0[1-9]{1}|1[0-2]|[1-9])\/(3[0-1]|[1-2]\d|[1-9]|0[1-9]{1})$/;
/**
 * 是否台灣有效的生日格式 , ext：1981/09/09
 * @param {string} value
 * @returns {boolean}
 */
export function isBirthDay(value: string) {
  return BIRTHDAY_PATTERN.test(value);
}

// 推一個不錯的驗証工具js
// https://github.com/enylin/taiwan-id-validator
