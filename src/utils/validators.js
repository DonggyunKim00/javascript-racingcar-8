import { MAGIC_NUMBER } from '../constant';

const { CAR_NAME_RANGE, COUNT_RANGE } = MAGIC_NUMBER;

export const isEmpty = (string) => !string.trim();

export const isDuplicate = (arr) => {
  const removedDuplicate = new Set(arr);
  return removedDuplicate.size !== arr.length;
};

export const isValidCarNameLength = (arr) =>
  !arr.some(
    (value) =>
      value.length < CAR_NAME_RANGE.MIN || value.length > CAR_NAME_RANGE.MAX
  );

export const isValidNumber = (string) => !Number.isNaN(Number(string));

export const isValidCountRange = (string) =>
  Number(string) >= COUNT_RANGE.MIN && Number(string) <= COUNT_RANGE.MAX;
