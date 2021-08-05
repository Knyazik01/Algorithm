import { ArrayOfNumbers } from '../interfaces';

const joinSort = (array: ArrayOfNumbers): ArrayOfNumbers => {
  const result = [...array];
  if (result.length < 2) return result;
  return result;
}

export default joinSort;