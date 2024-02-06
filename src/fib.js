// Total: O(1) * 3 + O(n), i.e. O(n) - linear
export function fibList(n) {
  const fibs = [0, 1]; // O(1)
  for (let current = fibs.length; current <= n; current += 1) {
    // O(n)
    fibs.push(fibs[current - 1] + fibs[current - 2]); // O(1)
  }
  return fibs; // O(1)
}

// Uses fibList function which is O(n) - linear
export function fib(n) {
  return fibList(n)[n];
}

// Total: O(1) * 3 + O(n - 1), i.e. O(n) - linear
export function fibListRec(n) {
  if (n < 2) return [0, 1]; // O(1)
  const prior = fibListRec(n - 1); // O(n - 1)
  // Due to base case, prior will always consist of at least [0, 1]
  const current = prior[n - 1] + prior[n - 2]; // O(1)
  return [...prior, current]; // O(1)
}

// Uses fibListRec function which is O(n) - linear
export function fibRecFast(n) {
  return fibListRec(n)[n];
}

// Total: O(1) + O(2n), i.e. O(2^n) - exponential
export function fibRec(n) {
  if (n < 2) return n; // O(1)
  return fibRec(n - 1) + fibRec(n - 2); // O(2n)
}
