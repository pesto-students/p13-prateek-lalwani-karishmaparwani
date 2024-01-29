function subarrayWithSumK(arr, K) {
  let subMap = new Map();

  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];

    if (currentSum == K) {
      return arr.slice(0, i + 1)//The arr.slice(start, end) method in JavaScript is used to extract a portion of an array and create a new array containing the selected elements.
    }
    if (subMap.has(currentSum - K)) {
      const startIndx = subMap.get(currentSum - K) + 1;
      const endIndx = i;
      return arr.slice(startIndx, endIndx + 1)
    }

    subMap.set(currentSum, i);
  }
  return null; // If no subarray with sum K is found.
}

// Example usage:
const input = [1, 2, 3, 4, 5, 6];
const K = 9;
console.log(subarrayWithSumK(input, K)); // Output: [2, 3, 4]