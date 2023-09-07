function* generatorExample(arr){

    for(str of arr){
        yield Symbol(str);
    }
}

const arr = ['hello','world','test'];

const symbolGenerator = generatorExample(arr);

console.log(symbolGenerator.next().value);
console.log(symbolGenerator.next().value);
console.log(symbolGenerator.next().value);