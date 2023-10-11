/**
 * Group Anagrams
Given an array of strings, group the anagrams together and return the groups as a 2D array. An anagram is a word formed by rearranging the letters of another word.

Example
Input
The first line of input contains an integer N, representing the number of strings in the array.The next N lines contain the strings.
Output
The output is a 2D array where each inner array represents a group of anagrams.Each group of anagrams is sorted in lexicographic order.
Explanation
Input
6
eat
tea
tan
ate
nat
bat

Output
[["ate","eat","tea"],["bat"],["nat","tan"]]

The output groups the anagrams together:
The anagrams "ate", "eat", and "tea" are grouped together.
The string "bat" is alone and forms a group by itself.
The anagrams "nat" and "tan" are grouped together.


Input
4
abc
bca
xyz
cba

Output
[["abc","bca","cba"],["xyz"]]

The anagrams "abc", "bca", and "cba" are grouped together. The string "xyz" forms a group by itself.
 * @param {*} array 
 * @returns 
 */
function groupAnagram(array){

    let grpAnagram = new Map();

    function sortedString(str){
        return str.split('').sort().join("")
    } 

    for (let str of array) {
       let sortedStr = sortedString(str)
        console.log(sortedStr,"1")
       if(grpAnagram.has(sortedStr)){
        grpAnagram.get(sortedStr).push(str);
        console.log(grpAnagram,"2")
       }else{
        grpAnagram.set(sortedStr, [str])
        console.log(grpAnagram,"3")
       }
        
    }
     // Convert the map values to an array to get the grouped anagrams
     return Array.from(grpAnagram.values());
}

// Example usage:
const input = ["listen"
,    "silent",
    "enlist",
    "paint",
    "taint"]
const result = groupAnagram(input);

console.log(result);