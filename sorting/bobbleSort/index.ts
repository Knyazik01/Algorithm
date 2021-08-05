import { ArrayOfNumbers } from '../interfaces';

const bobbleSort = ( array: ArrayOfNumbers): ArrayOfNumbers => {
  const result = [...array];
  if (result.length < 2) return result;
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;

    for ( let index = 0; index < result.length; index++ ) {
      if (result[index] > result[index + 1]) {
        isSorted = false;
        [result[index], result[index + 1]] = [result[index + 1], result[index]];
      }
    }
  }
  return result;
};

export default bobbleSort;