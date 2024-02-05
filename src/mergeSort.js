export default function mergeSort(arr) {
  // If array is length 1, return it
  if (arr.length === 1) return arr;

  // Otherwise split in half
  const halfway = Math.floor(arr.length / 2);
  let left = arr.slice(0, halfway);
  let right = arr.slice(halfway);

  // Sort each half
  left = mergeSort(left);
  right = mergeSort(right);

  // Merge together and return
  const merged = [];
  // When either left or right is empty, exit loop
  while (left.length && right.length) {
    if (left[0] < right[0]) merged.push(left.shift());
    else merged.push(right.shift());
  }
  return merged.concat(left, right);
}
