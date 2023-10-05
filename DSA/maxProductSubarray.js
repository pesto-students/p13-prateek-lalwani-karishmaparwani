/* ---Kadence algo
Max product of a Subarray
Take size of an array and elements as the input and find the maximum product of the subarray

Example1
Input:

N: 5
2
3
-2
4
5
Output:
20
Explanation:

*/
/**
 * @param {string} elements
 * @return {number}
 */
 function maxProductSubarray(n, elements) {
    // PLACEHOLDER_JAVASCRIPT_MAX_PRODUCT_SUBARRAY_BODY
    let sum = elements[0];
    let maxSum = elements[0];
    for (let i = 1; i < n; i++) {
        sum = sum * elements[i]
        if (sum < 0) {
            //if -ve number makes sum -ve then we have to set sum = 0 for fresh start
            sum = 1
        }
        if (maxSum < sum) {
            maxSum =  sum;
        }
    }

    return maxSum
}

console.log(maxProductSubarray(5, [2, 3, -2, 4, 5]))
