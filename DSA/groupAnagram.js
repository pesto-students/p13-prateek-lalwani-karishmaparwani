function groupAnagram(array){

    let grpAnagram = new Map();

    function sortedString(str){
        return str.split('').sort().join("")
    } 

    for (let str of array) {
       let sortedStr = sortedString(str)

       if(grpAnagram.has(sortedStr)){
        grpAnagram.get(sortedStr).push(str);
       }else{
        grpAnagram.set(sortedStr, [str])
       }
        
    }
     // Convert the map values to an array to get the grouped anagrams
     return Array.from(grpAnagram.values());
}

// Example usage:
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagram(input);

console.log(result);