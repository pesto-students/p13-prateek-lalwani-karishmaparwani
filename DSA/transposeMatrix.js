/**
 * Transpose a matrix (Doubt) Not running in Pesto
Take a 2d array as input and return the tranposeof that 2d Matrix

Example1
Input:

Rows: 2
Columns: 2
1
2
3
4
Output:
1 3
2 4
Explanation:

 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transposeMatrix(matrix) {
    // PLACEHOLDER_JAVASCRIPT_TRANSPOSE_MATRIX_BODY
  
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Create a new matrix with swapped dimensions (rows become columns and vice versa)
      const transposedMatrix = new Array(cols);
      for (let i = 0; i < cols; i++) {
          transposedMatrix[i] = new Array(rows);
      }
  
      // Populate the transposed matrix by swapping rows and columns
      for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
              transposedMatrix[j][i] = matrix[i][j];
          }
      }
  
      return transposedMatrix;
  
  }
  
//   /**
//    * @param {number[][]} matrix
//    */
//   function displayMatrix(matrix) {
//     console.log('Matrix:');
//     for (let i = 0; i < matrix.length; i++) {
//       console.log(matrix[i].join('\\t'));
//     }
//   }
//   /**
//    * @param {string} rows
//    * @param {string} cols
//    * @param {string[]} elements
//    */
//   function takeMatrixInput(rows, cols, elements) {
//     const input = JSON.stringify({ 'rows': rows, 'cols': cols, ...elements });
//     return input;
//   }
