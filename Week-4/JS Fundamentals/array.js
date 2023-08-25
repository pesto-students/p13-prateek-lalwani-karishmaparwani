function divideArray(nums) {
    let evenNumber = [];
    let oddNumber = [];

    nums.forEach(element => {
        if (element % 2 == 0) {
            evenNumber.push(element)
        } else {
            oddNumber.push(element)
        }
    }
    );
    console.log("Even Numbers : " + (evenNumber.length != 0 ? evenNumber : "None"))

    console.log("Odd Numbers : " + (oddNumber.length != 0 ? oddNumber : "None"))


}

console.log(divideArray([1, 3, 5, 7]))