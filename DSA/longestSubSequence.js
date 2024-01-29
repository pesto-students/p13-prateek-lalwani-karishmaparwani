function longestConsecutiveSubsequence(array){
let consecativeSequence = new Set(array);
let longStreak = 0;

for(num of consecativeSequence){
    if(!consecativeSequence.has(num - 1)){
let currentNum = num;
let currentStreak = 1

while(consecativeSequence.has(num + 1)){
    currentNum ++;
    currentStreak++;
}

longestStreak = Math.max(longStreak,currentStreak)
    }
}
return longestStreak
}

const input = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSubsequence(input)); // Output: 4 (The longest consecutive subsequence is [1, 2, 3, 4])