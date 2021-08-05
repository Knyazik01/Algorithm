import { ArrayOfNumbers } from './interfaces';
import bobbleSort from './bobbleSort';
import selectionSort from './selectionSort';
/*import joinSort from './joinSort';*/

const sorting = () => {
  const testArray: ArrayOfNumbers = Array.from(Array(100_000).keys()).reverse();

  console.time('bobble');
  const bobble = bobbleSort(testArray);
  console.timeEnd('bobble');
  console.log(bobble);


  console.time('select');
  const select = selectionSort(testArray);
  console.timeEnd('select');
  console.log(select);


/*  console.time('join');
  const join = joinSort(testArray);
  console.timeEnd('join');
  console.log(join);*/
};

export default sorting;