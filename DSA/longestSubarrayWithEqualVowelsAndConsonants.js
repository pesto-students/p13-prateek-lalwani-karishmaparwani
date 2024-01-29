/**
 * Write a function that takes an array of characters as input and finds the length of the longest subarray in the array that contains an equal number of vowels and consonants. The vowels are defined as 'a', 'e', 'i', 'o', and 'u' (both lowercase and uppercase).

Example
Input
The input is taken as a prompt from the user. The user is prompted to enter a string.
Output
The function should return the length of the longest subarray that contains an equal number of vowels and consonants.
Explanation
Input
babadabcdeiouiop
Output
8
 * @param {*} arr 
 * @returns 
 */
function longestSubarrayWithEqualVowelsAndConsonants(arr){
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowelsMap = new Map();

    vowelsMap.set(0,-1);
    let count = 0;
    let longestSubString = 0
    for (let i = 0; i < arr.length; i++) {
    
    if(vowels.has(arr[i])){
       count ++
    }else count --

    if(vowelsMap.has(count)){
        longestSubString = Math.max(longestSubString, i - vowelsMap.get(count) );
    }else{
        vowelsMap.set(count,i)
    }
    }
    return longestSubString
}

const input = "babadabcdeiouiop";
console.log(longestSubarrayWithEqualVowelsAndConsonants(input)); // Output: 12