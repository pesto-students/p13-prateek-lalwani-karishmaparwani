/**
 **Backtracking is an algorithmic technique for solving problems recursively by trying 
 to build a solution incrementally, 
 one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at 
 any point in time (by time, here, is referred to the time elapsed till reaching 
    any level of the search tree).   
 
 *Backtrack: If a constraint is violated or a leaf node is reached without a valid solution, 
 backtracking occurs. This means returning to a previous decision point, undoing the previous choice, 
 and exploring other options. 
 
 
 
 * Backtracking can be defined as a general algorithmic technique that considers searching every possible 
 combination in order to solve a computational problem. 

 So basically, the idea behind the backtracking technique is that it searches for a solution to a problem among all the available options.  Initially, we start the backtracking from one possible option and if the problem is solved with that selected option then we return the solution else we backtrack and select another option from the remaining available options. There also might be a case where none of the options will give you the solution and hence we understand that backtracking won’t give any solution to that particular problem. We can also say that backtracking is a form of recursion. This is because the process of finding the solution from the various option available is repeated recursively until we don’t find the solution or we reach the final state. So we can conclude that backtracking at every step eliminates those choices that cannot give us the solution and proceeds to those choices that have the potential of taking us to the solution.

 Consider a situation that you have three boxes in front of you and only one of them has a gold coin in it
  but you do not know which one. 
  So, in order to get the coin, you will have to open all of the boxes one by one. 
  You will first check the first box, if it does not contain the coin, you will have to close it and 
  check the second box and so on until you find the coin. This is what backtracking is, 
 that is solving all sub-problems one by one in order to reach the best possible solution. 

 
 * @param {*} nums 
 * @returns 
 */
function combine(n, k) {
    const result = [];
    const current = [];

    function backtrack(start) {
        if (current.length === k) {
            result.push([...current]);
            return;
        }

        for (let i = start; i <= n; i++) {
            current.push(i);
            backtrack(i + 1);
            current.pop();
        }
    }

    backtrack(1);
    return result;
}

const n = 4;
const k = 2;
const result = combine(n, k);
console.log(result);
