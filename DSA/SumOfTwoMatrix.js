/**
 * 
 * Sum of Two Matrix
Take 2 2d arrays from the user and return a 2d array as their sum. Note - rows and cols must be the same of both the input matrix else throw an error message "Arrays must have the same dimensions"

Example1
Input:

Row: 2
Column: 3
1
2
3
4
5
6
7
8
9
10
11
12
Output:
[[8, 10, 12],[14, 16, 18]]

 */

function sumOfTwoMatrices(rows, cols,array1, array2) {
    if (array1.length !== rows || array2.length !== rows || array1[0].length !== cols || array2[0].length !== cols) {
        throw new Error("Arrays must have the same dimensions");
    }

    //Create new Matrix to save Sum 
    let resultMartix = new Array (rows);
    for(let i=0;i<rows; i++){
        resultMartix[i] = new Array(cols)
    }

     // Perform element-wise addition
     for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            resultMartix[i][j] = array1[i][j] + array2[i][j];
        }
    }

    return resultMartix;
}
const rows = 2;
const cols = 3;
const matrix1 = [[1, 2, 3], [4, 5, 6]];
const matrix2 = [[7, 8, 9], [10, 11, 12]];

try {
    const result = sumOfTwoMatrices(rows,cols,matrix1, matrix2);
    console.log(result); // Output: [[8, 10, 12], [14, 16, 18]]
} catch (error) {
    console.error(error.message); // Output: "Arrays must have the same dimensions"
}