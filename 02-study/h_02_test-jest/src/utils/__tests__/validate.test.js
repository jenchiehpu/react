import { add, isEmail, isBirthDay } from '../validate';

describe('validate', () => {
  test('add', () => {
    expect(add(1, 1)).toBe(2);
    expect(add(1, 1)).not.toBe(10);
  });

  /* // TODO
  test('isEmail', () => {
    expect(isEmail('milkmidi@gmail.com')).toBeTruthy();
    expect(isEmail('milkmidi.test@gmail.com')).toBeTruthy();
    expect(isEmail('milkmidi+jp@gmail.com')).toBeTruthy();

    expect(isEmail('milkmidigmail.com')).toBeFalsy();
    expect(isEmail('milkmidigmail')).toBeFalsy();
    expect(isEmail()).toBeFalsy();
  });

  test('isBirthDay', () => {
    expect(isBirthDay('1981/09/09')).toBeTruthy();
    expect(isBirthDay('1981/9/9')).toBeTruthy();
    expect(isBirthDay('2000/1/1')).toBeTruthy();
    expect(isBirthDay('2000/2/28')).toBeTruthy();
    expect(isBirthDay('2000/02/28')).toBeTruthy();

    expect(isBirthDay('')).toBeFalsy();
    expect(isBirthDay('20200/11/33')).toBeFalsy();
    expect(isBirthDay('2020/00/00')).toBeFalsy();
    expect(isBirthDay('20201/00/00')).toBeFalsy();
    expect(isBirthDay('20201/1/50')).toBeFalsy();
    expect(isBirthDay('2020/13/50')).toBeFalsy();
    expect(isBirthDay('2020/12/32')).toBeFalsy();
    expect(isBirthDay('Fake')).toBeFalsy();
  });
  // */
});
