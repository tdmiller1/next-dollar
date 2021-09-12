export const isNegative = (number: string | number): boolean => {
  if (typeof number === "number") {
    return number < 0;
  }
  return parseInt(number, 10) < 0;
};
