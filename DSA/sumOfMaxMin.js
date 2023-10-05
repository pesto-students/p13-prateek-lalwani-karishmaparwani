/*

Get the sum of the maximum and minimum values in an array
Write a function to return the sum of max and min values in an array.

Example1
Input:
5,2,9,1,7
Output:
10
Explanation:
The function should return the sum of the maximum and minimum values in the array.

*/


function findSumOfMaxAndMin(arr) {
    // PLACEHOLDER_JAVASCRIPT_FIND_SUM_OF_MAX_AND_MIN_BODY
  
    const maxNumber = Math.max(...arr)
  
    const minNumber = Math.min(...arr)
  
    return maxNumber + minNumber
  }

  findSumOfMaxAndMin([1,2,3,4,5]) 

