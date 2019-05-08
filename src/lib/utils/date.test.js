import * as date from './date';

describe('date utils', () => {
  describe('isValid', () => {
    it('should return true for valid dates', () => {
      expect(date.isValid('2011-02-03')).toBeTruthy();
      expect(date.isValid(new Date('04/05/2019'))).toBeTruthy();
    });

    it('should return a falsey value for invalid dates', () => {
      expect(date.isValid(null)).toBeFalsy();
      expect(date.isValid('invalid date')).toBeFalsy();
      expect(date.isValid('99/99/2012')).toBeFalsy();
    });
  });

  describe('formattedDate', () => {
    it('should return valid dates in the yyyy-mm-dd format', () => {
      expect(date.formattedDate('01-22-1969')).toBe('1969-01-22');
      expect(date.formattedDate('2019-05-08T07:00:00.000Z')).toBe('2019-05-08');
    });

    it('should return a falsey value for invalid dates', () => {
      expect(date.formattedDate(null)).toBeFalsy();
      expect(date.formattedDate('invalid date')).toBeFalsy();
    });
  });
});
