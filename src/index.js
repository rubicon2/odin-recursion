import './style.css';
import factorial, { factorialSlow } from './factorial';

console.time('fast');
const f = factorial(9000);
console.timeEnd('fast');
console.log(f);

console.time('slow');
const s = factorialSlow(9000);
console.timeEnd('slow');
console.log(s);
