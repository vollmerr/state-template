import * as normalize from './normalize';

describe('normalize utils', () => {
  describe('normalizePhone', () => {
    it('should remove any non digit characters', () => {
      expect(normalize.normalizePhone('ab1c {6sa')).toBe('16');
    });

    it('should return in the format of 123-456-7890', () => {
      expect(normalize.normalizePhone('')).toBe('');
      expect(normalize.normalizePhone('1234')).toBe('123-4');
      expect(normalize.normalizePhone('1234567')).toBe('123-456-7');
      expect(normalize.normalizePhone('123456789012345')).toBe('123-456-7890');
    });
  });

  describe('normalizeZip', () => {
    it('should remove any non digit characters', () => {
      expect(normalize.normalizeZip('ab1c {6sa')).toBe('16');
    });

    it('should return in the format of 12345', () => {
      expect(normalize.normalizeZip('')).toBe('');
      expect(normalize.normalizeZip('123')).toBe('123');
      expect(normalize.normalizeZip('123456789012345')).toBe('12345');
    });
  });
});
