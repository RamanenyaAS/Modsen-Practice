class Person{
  constructor(name, age, country){
    this.name = name;
    this.age = age;
    this.country = country;
  }
  showInfo(){
    console.log(`Name: ${this.name}, age: ${this.age}, country: ${this.country}`);
  }
}

let firstHuman = new Person("John", 23, "Canada");
firstHuman.showInfo();
let secondHuman = new Person("Sam", 33, "France");
secondHuman.showInfo();