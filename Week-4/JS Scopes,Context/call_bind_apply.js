class Calculator {
    add(a, b) {
        return console.log(a + b)
    }

    subsract(a, b) {
        return console.log(a - b)
    }

    multiply(a, b) {
        return console.log(a * b)
    }

    divide(a, b) {
        return console.log(a / b)
    }
}

class ScientificCalculator extends Calculator {

    square(a) {
        return console.log(a * a)
    }

    power(a, b) {
        return console.log(a ** b)
    }

    cube(a) {
        return console.log(a * a * a)
    }
}

const scientificCalculatorInstance = new ScientificCalculator();
//we can do directly then why to use call()
scientificCalculatorInstance.add(10,5);

scientificCalculatorInstance.subsract.apply(this,[10,5]);

function multiplyByTwo(number){
    return  number * 2;
}

const bindExample = multiplyByTwo.bind(scientificCalculatorInstance,4)

console.log(bindExample())

function powerOfThree(number){
    return  number ** 3
}

const bindExample2 = powerOfThree.bind(scientificCalculatorInstance,4)

console.log(bindExample2())