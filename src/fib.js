export function fib(n) {
  const fibs = [];
  for (let current = 0; current < n; current += 1) {
    fibs.push(fibs[current - 1] + fibs[current - 2] || 1);
  }
  return fibs[fibs.length - 1];
}

export function fibRec(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
