export const isValid = (date) => {
  if (
    !date
    || Number.isNaN(Number(new Date(date)))
  ) {
    return false;
  }

  return true;
};
