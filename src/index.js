import './style.css';
import { fib, fibRec } from './fib';

const fibRecTest = fibRec(8);
console.log('fibRec 8: ', fibRecTest);

const fibTest = fib(8);
console.log('fib 8: ', fibTest);
