/*
Take array as an input from the user andreplace occurrences of an old key with a new key in an array

Example1
Input:

1,2,3,2,4,2,5
2
6
Output:
[1, 6, 3, 6, 4, 6, 5]
Explanation:
There are total 3 2s presenting a array which is replaced by 6
*/
function replaceKey(arr, oldKey, newKey) {
    // PLACEHOLDER_JAVASCRIPT_REPLACE_KEY_BODY

      for (let i = 0; i<arr.length; i++){
          if(arr[i] == arr[oldKey]){
            arr[i] = newKey
          }
      }

      return arr
  }

  console.log(replaceKey([1,2,3,2,4,2,5],2,6))
