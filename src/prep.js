export function sumAll(n) {
  return n <= 0 ? 0 : n + sumAll(n - 1);
}

export function pow(base, exponent) {
  return exponent <= 0 ? 1 : base * pow(base, exponent - 1);
}

export function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

export function all(arr, callback) {
  if (arr.length === 1) return callback(arr[0]);
  return callback(arr.pop()) && all(arr, callback);
}

export function arrayProduct(arr) {
  if (arr.length === 1) return arr[0];
  return arr.pop() * arrayProduct(arr);
}

export function contains(obj, seekValue) {
  // Only one instance of function needs to come back true for whole chain to return true
  let isFound = false;
  Object.values(obj).forEach((property) => {
    // Recursive case - terminates recursion when property is not an iterable object
    if (typeof property === 'object') isFound = contains(property, seekValue);
    if (property === seekValue) isFound = true;
  });
  return isFound;
}

export function totalInts(obj) {
  if (typeof obj === 'number') return 1;
  if (typeof obj !== 'object') return 0;
  // Otherwise, obj must be iterable, i.e. array or object
  // Iterate over obj and reduce down to a single value, then return that
  return Object.values(obj).reduce(
    (sum, current) => sum + totalInts(current),
    0,
  );
}

export function sumSquares(obj) {
  if (typeof obj === 'number') return obj * obj;
  if (typeof obj !== 'object') return 0;
  // Otherwise, object must be an object or array
  return Object.values(obj).reduce(
    (sum, current) => sum + sumSquares(current),
    0,
  );
}
