 /**
   * First Non Repeating Element 
   */
/**
   * @param {string} str
   * @return {string}
   */
function firstNonRepeatingElement(str) {
    // TODO: Implement your code here
    let nonRepeatingVar = new Map();

    for(let i =0; i< str.length; i++){
        const char = str[i];
      if(!nonRepeatingVar.has(char)){
        nonRepeatingVar.set(char, 1)
      }else{
        nonRepeatingVar.set(char, nonRepeatingVar.get(char)+1)
      }
    }

    for(const [num , freq] of nonRepeatingVar.entries())
    if(freq == 1){
      return num
    }

    return -1;
    
  }
  
console.log(firstNonRepeatingElement("xyzxy"))