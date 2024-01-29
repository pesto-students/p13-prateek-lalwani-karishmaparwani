function checkDuplicates(str){
    let countDuplicate = new Map();

    for(let i =0; i< str.length; i++){
        const char = str[i];
      if(!countDuplicate.has(char)){
        countDuplicate.set(char, 1)
      }else{
        countDuplicate.set(char, countDuplicate.get(char)+1)
      }
    }

    for(const [num , freq] of countDuplicate.entries())
    if(freq > 1){
      return "There are duplicate elementsin the array."
    }

    return -1;
    
}