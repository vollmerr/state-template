import * as validate from '../validate';

const emptyVals = [
  [],
  {},
  null,
  undefined,
  () => { },
  '',
];

describe('validate utils', () => {
  describe('isEmptyText', () => {
    it('should return `Required` for non string or empty values', () => {
      emptyVals.forEach((value) => {
        expect(validate.isEmptyText(value)).toEqual('Required');
      });
    });

    it('should return `undefined` for non empty strings', () => {
      const values = [
        '!@$&%&^%61527[]+_P{p]9',
        'test string',
      ];

      values.forEach((value) => {
        expect(validate.isEmptyText(value)).toEqual(undefined);
      });
    });
  });

  describe('isEmptyRadio', () => {

  });

  describe('isEmptyCheck', () => {
    it('should return `Required` for empty arrays', () => {
      expect(validate.isEmptyCheck(undefined)).toBe('Required');
      expect(validate.isEmptyCheck([])).toBe('Required');
    });
  });

  describe('isValidEmail', () => {
    it('should return an error for invalid emails', () => {
      expect(validate.isValidEmail('abc.com')).toBeDefined();
    });

    it('should return a falsey value for valid emails', () => {
      expect(validate.isValidEmail('test@domain.com')).toBeFalsy();
    });
  });
});
