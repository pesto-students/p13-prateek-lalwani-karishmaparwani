/**
 * Delete elements in anarray (DOUBT)
Take an array input from the user and delete all the elements which are divisible by 2 and 3

Example1
Input:

1,2,3,4,5,6,7,8,9
Output:
[1, 5, 7]
Explanation:
1 , 5 and 7 are not divisible by 2 and 3.
 * 
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */

function deleteDivisibleElements(arr) {
    // PLACEHOLDER_JAVASCRIPT_DELETE_DIVISIBLE_ELEMENTS_BODY
      let returnFinalElements = []
      for(let i = 0; i<arr.length;i++){
    
       if((!(arr[i] % 2 == 0 )||!(arr[i] % 3 == 0)) ){
           returnFinalElements.push(arr[i])}
      }
      
  
      return returnFinalElements
  }
  console.log(deleteDivisibleElements([9,12,15,18,21]))

  