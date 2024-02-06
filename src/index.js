import './style.css';
import { fib, fibRec, fibList, fibListRec, fibRecFast } from './fib';
import mergeSort from './mergeSort';

const fibRecTest = fibRec(8);
console.log('fibRec 8: ', fibRecTest);

const fibTest = fib(8);
console.log('fib 8: ', fibTest);

const fibListR = fibListRec(8);
console.log(fibListR);

const fibListNormal = fibList(8);
console.log(fibListNormal);

const sorted = mergeSort([105, 79, 100, 110]);
console.log('sorted: ', sorted);

const mergeSortArbitrary = mergeSort(
  [
    {
      name: 'bob',
      age: 31,
      height: 6.2,
    },
    {
      name: 'glob',
      age: 19,
      height: 5.4,
    },
    {
      name: 'schblob',
      age: -47,
      height: 5.11,
    },
  ],
  (a, b) => a.age < b.age,
);
console.log(mergeSortArbitrary);

console.time('fibRec');
// Took 2937ms...
console.log(fibRec(40));
console.timeEnd('fibRec');

console.time('fibRecFast');
// Took 0ms!
console.log(fibRecFast(40));
console.timeEnd('fibRecFast');
