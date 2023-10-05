function longestSubArray(arr){
    let maxLength = 0;
    let count =0;
     let hashmap = new Map();
     hashmap.set(0,-1)//Intilize 0 with count of -1
     for(let i = 0; i<arr.length;i++){
        if(arr[i] === 0){
            count --;
        }else{
            count ++;
        }
        console.log(maxLength+"maxlength")
        console.log(count+"count")
        console.log(hashmap)
        if(hashmap.has(count)){
            maxLength = Math.max(maxLength, i - hashmap.get(count))
            console.log(maxLength)
        }else{
            hashmap.set(count,i)
            console.log(maxLength + "set")
        }
     }
     return maxLength
}

console.log(longestSubArray([0,1,0,0,1,1,0,0]))