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
console.log(longestSubarrayWithEqualVowelsAndConsonants(input)); // Output: 8