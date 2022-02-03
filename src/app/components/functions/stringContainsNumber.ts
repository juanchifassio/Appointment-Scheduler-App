export const stringContainsNumber = (string: string) => {
  let matchPattern = string.match(/\d+/g);
  if (matchPattern != null) {
    return true;
  } else {
    return false;
  }
};
