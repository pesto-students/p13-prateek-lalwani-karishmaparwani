 
/**
 * Spiral Order Traversal in Array
Given a 2D array of integers, implement an algorithm to print its elements in spiral order.

Example1
Input:
Rows: 3
Columns: 3
1 2 3 4 5 6 7 8 9
Output:
1 2 3 6 9 8 7 4 5
Explanation:
The elements are as follows:1 2 34 5 67 8 9

The output is the elements of the array printed in spiral order: 1 2 3 6 9 8 7 4 5.

The elements are traversed in the following order: top row from left to right, right column from top to bottom, bottom row from right to left, and left column from bottom to top.
 * 
 */

// function spiralOrder(matrix) {
//     if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
//         return [];
//     }

//     const result = [];

//     let top = 0;
//     let bottom = matrix.length - 1;
//     let left = 0;
//     let right = matrix[0].length - 1;

//     while (top <= bottom && left <= right) {
//         // Traverse top row from left to right
//         for (let col = left; col <= right; col++) {
//             result.push(matrix[top][col]);
//         }
//         top++;

//         // Traverse right column from top to bottom
//         for (let row = top; row <= bottom; row++) {
//             result.push(matrix[row][right]);
//         }
//         right--;

//         // Check if there's still a valid row to traverse from bottom to top
//         if (top <= bottom) {
//             // Traverse bottom row from right to left
//             for (let col = right; col >= left; col--) {
//                 result.push(matrix[bottom][col]);
//             }
//             bottom--;
//         }

//         // Check if there's still a valid column to traverse from left to right
//         if (left <= right) {
//             // Traverse left column from bottom to top
//             for (let row = bottom; row >= top; row--) {
//                 result.push(matrix[row][left]);
//             }
//             left++;
//         }
//     }

//     return result;
// }

// // Example usage:
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

  
