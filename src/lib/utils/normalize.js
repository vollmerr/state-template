/**
 * Normalizes values into a 123-456-7890 format
 */
export const normalizePhone = (value) => {
  if (!value) { return value; }

  const nums = value.replace(/[^\d]/g, '');
  // ex: 12
  if (nums.length <= 3) { return nums; }
  // ex: 123-4
  if (nums.length <= 6) { return nums.replace(/^(.{3})(.{0,3})/, '$1-$2'); }
  // ex: 123-456-78
  return nums.replace(/^(.{3})(.{3})(.{0,4}).*/, '$1-$2-$3');
};

/**
 * Normalizes values into a 12345 format
 */
export const normalizeZip = (value) => {
  if (!value) { return value; }

  const nums = value.replace(/[^\d]/g, '');
  // ex: 12345
  return nums.replace(/^(.{0,5}).*/, '$1');
};
