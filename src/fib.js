export function fib(n) {
  const fibs = [0, 1];
  for (let current = fibs.length; current <= n; current += 1) {
    fibs.push(fibs[current - 1] + fibs[current - 2]);
  }
  return fibs[fibs.length - 1];
}

export function fibRec(n) {
  if (n < 2) return n;
  return fibRec(n - 1) + fibRec(n - 2);
}
