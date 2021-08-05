import { ArrayOfNumbers } from '../interfaces';

const selectionSort = (array: ArrayOfNumbers): ArrayOfNumbers => {
  const result = [...array];
  if (result.length < 2) return result;
  for ( let sortedPosition = 0; sortedPosition < result.length; sortedPosition++ ) {
    let currentMinIndex = sortedPosition;
    for ( let index = sortedPosition + 1; index < result.length; index++ ) {
      if (result[index] < result[currentMinIndex]) {
        currentMinIndex = index;
      }
    }
    [result[sortedPosition], result[currentMinIndex]] = [result[currentMinIndex], result[sortedPosition]];
  }
  return result;
}

export default selectionSort;