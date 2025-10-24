export const isEmpty = (string) => !string.trim();

export const isDuplicate = (arr) => {
  const removedDuplicate = new Set(arr);
  return removedDuplicate.size !== arr.length;
};

export const isValidCarNameLength = (arr) =>
  !arr.some((value) => value.length < 1 || value.length > 5);

export const isValidNumber = (string) => !Number.isNaN(Number(string));

export const isValidCountRange = (string) =>
  Number(string) >= 1 && Number(string) <= 10;
