export const isValid = (date) => {
  if (
    !date
    || Number.isNaN(Number(new Date(date)))
  ) {
    return false;
  }

  return true;
};


// returns a date in yyyy-mm-dd format
export const formattedDate = (date) => {
  if (isValid(date)) {
    return new Date(date).toISOString().slice(0, 10);
  }

  return null;
};
