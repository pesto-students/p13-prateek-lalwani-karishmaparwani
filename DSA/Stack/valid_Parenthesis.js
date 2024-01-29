function isValid(s) {
    const stack = [];
    const bracketMapping = { ')': '(', '}': '{', ']': '[' };
  
    for (const char of s) {
      if (bracketMapping[char] !== undefined) {
        // It's a closing bracket
        const lastOpenBracket = stack.pop();
        if (lastOpenBracket !== bracketMapping[char]) {
          return false;
        }
      } else {
        // It's an open bracket
        stack.push(char);
      }
    }
  
    return stack.length === 0;
  }
  
  // Example usage:
  const s = "()";
  const result = isValid(s);
  console.log(result);