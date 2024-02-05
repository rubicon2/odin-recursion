export function fibList(n) {
  const fibs = [0, 1];
  for (let current = fibs.length; current <= n; current += 1) {
    fibs.push(fibs[current - 1] + fibs[current - 2]);
  }
  return fibs;
}

export function fib(n) {
  return fibList(n)[n];
}

export function fibListRec(n) {
  if (n < 2) return [0, 1];
  const prior = fibListRec(n - 1);
  // Due to base case, prior will always consist of at least [0, 1]
  const current = prior[n - 1] + prior[n - 2];
  return [...prior, current];
}

export function fibRec(n) {
  if (n < 2) return n;
  return fibRec(n - 1) + fibRec(n - 2);
}
