import * as validate from './validate';

describe('validate utils', () => {
  describe('isEmptyText', () => {
    it('should return an error for non string or empty values', () => {
      [
        '',
        null,
        undefined,
        {},
      ].forEach((value) => {
        expect(validate.isEmptyText(value)).toBeDefined();
      });
    });

    it('should return nothing for non empty strings', () => {
      const values = [
        '!@$&%&^%61527[]+_P{p]9',
        'test string',
      ];

      values.forEach((value) => {
        expect(validate.isEmptyText(value)).toBeUndefined();
      });
    });
  });

  describe('isEmptyRadio', () => {
    it('should return an error for empty radios', () => {
      expect(validate.isEmptyRadio(undefined)).toBeDefined();
    });

    it('should return nothing for all other values', () => {
      expect(validate.isEmptyRadio('abc')).toBeUndefined();
      expect(validate.isEmptyRadio('123')).toBeUndefined();
      expect(validate.isEmptyRadio(0)).toBeUndefined();
    });
  });

  describe('isEmptyCheck', () => {
    it('should return an error for empty checks', () => {
      expect(validate.isEmptyCheck(undefined)).toBeDefined();
      expect(validate.isEmptyCheck([])).toBeDefined();
    });

    it('should return an nothing for valid checks', () => {
      expect(validate.isEmptyCheck([1, 2, 3])).toBeUndefined();
    });
  });

  describe('isEmptyFile', () => {
    it('should return an error for empty files', () => {
      expect(validate.isEmptyFile(undefined)).toBeDefined();
    });

    it('should return an error for invalid files', () => {
      const file = { otherStuff: 'need a name...' };
      expect(validate.isEmptyFile(file)).toBeDefined();
    });

    it('should return nothing for a single valid file', () => {
      const file = { name: 'test-file' };
      expect(validate.isEmptyFile(file)).toBeUndefined();
    });

    it('should return nothing for a multiple valid file', () => {
      const files = [{ name: 'test-file-1' }, { name: 'test-file-2' }];
      expect(validate.isEmptyFile(files)).toBeUndefined();
    });
  });

  describe('isValidEmail', () => {
    it('should return an error for invalid emails', () => {
      expect(validate.isValidEmail('abc.com')).toBeDefined();
    });

    it('should return nothing for valid emails', () => {
      expect(validate.isValidEmail('test@domain.com')).toBeUndefined();
    });
  });

  describe('isValidPhone', () => {
    it('should return an error for invalid phone numbers', () => {
      expect(validate.isValidPhone('123')).toBeDefined();
    });

    it('should return nothing for valid phone numbers', () => {
      expect(validate.isValidPhone('123-456-7890')).toBeUndefined();
    });
  });

  describe('isValidDate', () => {
    it('should return an error for invalid dates', () => {
      expect(validate.isValidDate('not a valid date')).toBeDefined();
      expect(validate.isValidDate(null)).toBeDefined();
    });

    it('should return nothing for valid phone numbers', () => {
      expect(validate.isValidDate('1969-02-05')).toBeUndefined();
      expect(validate.isValidDate(new Date())).toBeUndefined();
    });
  });

  describe('isValidZip', () => {
    it('should return an error for invalid zips', () => {
      expect(validate.isValidZip('123')).toBeDefined();
      expect(validate.isValidZip('abcde')).toBeDefined();
      expect(validate.isValidZip(null)).toBeDefined();
    });

    it('should return nothing for valid zips', () => {
      expect(validate.isValidZip('12345')).toBeUndefined();
    });
  });
});
