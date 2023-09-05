function calcWordFrequencies (){
    let promptInput = prompt();
    let wordArr = promptInput.split(" ");
    let countMap = new Map();
    if(wordArr){
        wordArr.forEach((element) => {
            if(!countMap.has(element)){
                countMap.set(element , 1)
            }
            else{
                countMap.set(element , countMap.get(element) + 1)
            }
        });
}
console.log(countMap)
}


calcWordFrequencies()