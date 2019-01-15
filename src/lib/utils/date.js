export const isValid = (date) => {
  const d = new Date(date);

  if (!date || Number.isNaN(d)) {
    return false;
  }

  return true;
};
