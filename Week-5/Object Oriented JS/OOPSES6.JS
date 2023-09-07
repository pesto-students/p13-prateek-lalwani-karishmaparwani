
//---------------------------------- Section 1 ----------------------------------------//
class Vehicle { 
    make
    year
    model
    color
   
    drive() {
        console.log("Driving"+ this.make + this.model)
    }
}

class car extends Vehicle{
    numSeats
}

class RideShareCar extends Vehicle {
    isAvailable
}


//---------------------------------- Section 2 ----------------------------------------//
class Shape {

    calculateArea(){

    }
}

class Triangle extends Shape {
    calculateArea(base,height){
        return (base * height) / 2
    }
}
class Rectangle extends Shape {
    calculateArea(width ,height){
        return width * height
    }
}
class Circle extends Shape {
    calculateArea(radius){

        return Math.PI * radius ** 2;

    }
}

const triangleInstance = new Triangle();
console.log("Triangle Area : "+triangleInstance.calculateArea(200,100))

const rectangleInstance = new Rectangle();
console.log("Rectangle Area : " +rectangleInstance.calculateArea(200,100))

const circleInstance = new Circle();
console.log("Circle Area : "+circleInstance.calculateArea(200))
//---------------------------------- Section 3 ----------------------------------------//
class BankAccount {
#accountNumber
#balance
#accountHolderName
    
}

class CheckingAccount extends BankAccount{
    getBalance(){
        return this.balance
    }
    withdraw(amount){
        if(this.getBalance() > 0){
            if((this.balance - amount)>0 ){
            this.balance = this.balance - amount}
        }
    }
}

class SavingsAccount extends BankAccount{
    getBalance(){
        return this.balance
    }
    deposit(amount){
        
        this.balance = amount
    }
}

const withdrawInstance = new CheckingAccount();
const depositInstance = new SavingsAccount();

depositInstance.deposit(100)

 console.log(depositInstance.getBalance());

withdrawInstance.withdraw(50);


 console.log(withdrawInstance.getBalance());


withdrawInstance.withdraw(50);

console.log(withdrawInstance.getBalance());
