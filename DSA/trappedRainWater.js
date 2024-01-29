/**
 * Trapping Rain Water -- 
Given an array representing the heights of bars, find the total amount of rainwater that can be trapped between the bars.

Example1
Input:
N: 8
0
1
0
2
1
0
1
3
Output:
5
Explanation:
The output should be the total amount of rainwater that can be trapped.(DOUBT)NOT working in PESTO app
 */

  //-----------
  /**
   * 
   * TC: O(N) SC O(N)
 * @param {number[]} heights
 * @return {number}
 */
  function trapRainWater(heights, N) {
    const heightOfTowers = N;
    let maxLeft = new Array(N);
    let maxRight = new Array(N);

    maxLeft[0] = heights[0];
    for (let i = 1; i < heightOfTowers; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], heights[i]);
    }

    maxRight[heightOfTowers - 1] = heights[heightOfTowers - 1]; // last element of array

    for (let j = heightOfTowers - 2; j >= 0; j--) {
        maxRight[j] = Math.max(maxRight[j + 1], heights[j]);
    }

    let trappedWater = 0;

    for (let k = 0; k < heightOfTowers; k++) {
        trappedWater += Math.min(maxRight[k], maxLeft[k]) - heights[k];
    }

    return trappedWater;
}



// Example usage:
const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trapRainWater(heights, heights.length)); // Output: 6 */
 