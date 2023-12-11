/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(left <= right){
        const sum = numbers[left] + numbers[right];

        if(sum == target){
            return [left +1 , right + 1];
        }else if (sum < target ){
            left ++;
        }else{
            right --;
        }
    }
    return []
};

const input = [3,2,4];
const target = 6;
const result = twoSum(input, target);
console.log(result); // Output: [1, 2]