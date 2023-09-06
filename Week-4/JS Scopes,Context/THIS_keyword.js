var Person = {
    name: "",
    age: 0,
    gender: "",
    nationality: "",
    introduce : function (name,age,gender,nationality){
        this.name = name 
        this.age = age 
        this.gender = gender 
         this.nationality = nationality;
        return "My name is "+ this.name+ ", I am " + this.age +" years old" + ", I am "+this.gender + ", and I am "+this.nationality
    }
}

let person2 = new Person();
var person1 = function (name, age, gender, nationality){
    console.log(this.introduce( name,age,gender,nationality))
};

console.log(person2)
// var person3 = newPerson()();

//person1.apply(Person,["Raghav", 16 ,"Male","Indian"])
// person2.apply(Person, ["Bhakti", 21 ,"Female","Indian"])
// person3.apply(Person, ["Ayushi", 26 ,"Female","Indian"])

