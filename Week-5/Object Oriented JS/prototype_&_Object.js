//---------------------Protecting the Object------------------------------------//

let person = {
    _name: "John", // Prefixing with an underscore to indicate it's a private property
    _email: "john@gmail.com",
    _age: 25,


    // Getter for the name property (read-only)
    get name() {
        return this._name;
    },

    // Getter for the email property (read-only)
    get email() {
        return this._email;
    },

    get age() {
        return this._age;
    },

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge
        } else {
            console.error('Age must be a non-negative number.');
        }
    }
}

// Accessing the properties
console.log(person.name); // Read the name property
console.log(person.email); // Read the email property

person.age = 30; // Set the age property (write-only)
console.log(person.age); // Cannot directly read the age property

// Attempt to modify the read-only properties (will not work)
person.name = 'Alice'; // This won't modify the name
person.email = 'alice@example.com'; // This won't modify the email



//-------------------------------JavaScript Prototype------------------------//

function Vehicle (make, model, year) {
    this.make = make;
    this.model = model;
this.year = year;
}

Vehicle.prototype.getDetails = function(){
 console.log( "Car Brand: "+this.make +" Model number: "+ this.model +" Year of Launch: " +this.year )
}

function Car (numDoors,make,model,year){
    Vehicle.call(this, make,model,year)

    this.numDoors = numDoors
}

Car.prototype.getDetails = function(){
    console.log("Car Brand: "+this.make +" Model number: "+ this.model +" Year of Launch: " +this.year +" Numbers of doors: " +this.numDoors)
}

let vehicleInstance = new Vehicle("tata","Grand Vitara",2023)
let carInstance =new Car(4,"tata","Grand Vitara",2023)

vehicleInstance.getDetails();
carInstance.getDetails();


