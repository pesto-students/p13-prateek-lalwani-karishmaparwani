function counter () {
  let count = 1;
    function incrementCounter(){
        console.log("abc")
        count=count+1;
    }
    return incrementCounter
}

let firstValues = new Array();
let secondValues = [];

const firstCounter = counter();
for (let i = 0; i < 5; i++){
    const a = firstCounter();
    console.log(a , typeof(a))
    firstValues.push(firstCounter())
}
console.log(firstValues);

// const secondCounter = counter();
// for (let i = 0; i < 3; i++){
//     secondValues.push(secondCounter())
// }
// Question : why it is showing [ undefined, undefined, undefined, undefined, undefined ] in output