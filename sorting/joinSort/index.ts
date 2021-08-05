import { ArrayOfNumbers } from '../interfaces';

const joinSort = (array: ArrayOfNumbers): ArrayOfNumbers => {
  const merge = (left: ArrayOfNumbers, right: ArrayOfNumbers): ArrayOfNumbers => {
    const result = [];
    const count = left.length + right.length;
    for (let i = 0; i <= count; i++) {
      // check nonempty arrays
      if (left.length === 0 || right.length === 0) {
        result.push(...[...left, ...right]);
        break;
      }

      if (left[0] < right[0]) {
        result.push(...left.splice(0, 1));
      } else {
        result.push(...right.splice(0, 1));
      }
    }
    return result;
  };

  const resR = [...array];
  if (resR.length < 2) return resR;
  const resL = resR.splice(0, resR.length/2);
  const l = joinSort(resL);
  const r = joinSort(resR);
  return merge(l, r);
}

export default joinSort;