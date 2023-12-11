/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    const result = [];
  
    function backtrack(start, currentCombination, remainingTarget) {
      if (remainingTarget === 0) {
        // If remaining target is 0, add the current combination to the result
        result.push([...currentCombination]);
        return;
      }
  
      for (let i = start; i < candidates.length; i++) {
        // Check if the current candidate is not exceeding the remaining target
        if (candidates[i] <= remainingTarget) {
          // Include the current candidate in the combination
          currentCombination.push(candidates[i]);
  
          // Continue with the same candidate, as it can be used multiple times
          backtrack(i, currentCombination, remainingTarget - candidates[i]);
  
          // Exclude the current candidate to backtrack
          currentCombination.pop();
        }
      }
    }
  
    // Start the backtracking process from the beginning
    backtrack(0, [], target);
  
    return result;
  }
  
  // Example usage:
  const candidates = [2, 3, 6, 7];
  const target = 7;
  const result = combinationSum(candidates, target);
  console.log(result);
  