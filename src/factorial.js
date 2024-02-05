function factorialMain(n) {
  if (n === 1) return n;
  return n + factorialMain(n - 1);
}

export default function factorial(n) {
  // Check arguments in this method before kicking off recursive method
  // otherwise this line will be run in every instance of the function.
  // Difference in calculation speed is negligible in this instance,
  // although for a function with more argument checking, or pre-recursive
  // calculations, it may be worth doing.
  if (n < 1) throw new Error(`Factorial provided an argument of ${n}`);
  return factorialMain(n);
}

export function factorialSlow(n) {
  // Difference is neglible - sometimes factorial() is faster, sometimes this function is faster.
  if (n < 1) throw new Error(`Factorial provided an argument of ${n}`);
  if (n === 1) return n;
  return n + factorialSlow(n - 1);
}
