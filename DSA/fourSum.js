function fourSum(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the input array in ascending order

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicates

            const remainingTarget = target - nums[i] - nums[j];
            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum === remainingTarget) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                    while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                    left++;
                    right--;
                } else if (sum < remainingTarget) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

// Example usage:
const input = [1, 0, -1, 0, -2, 2];
const target = 0;
const result = fourSum(input, target);
console.log(result);
