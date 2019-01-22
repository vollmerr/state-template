import * as date from './date';

describe('date utils', () => {
  describe('isValid', () => {
    it('should return true for valid dates', () => {
      expect(date.isValid('2011-02-03')).toBeTruthy();
      expect(date.isValid(new Date('04/05/2019'))).toBeTruthy();
    });

    it('should return false for invalid dates', () => {
      expect(date.isValid(null)).toBeFalsy();
      expect(date.isValid('invalid date')).toBeFalsy();
      expect(date.isValid('99/99/2012')).toBeFalsy();
    });
  });
});
