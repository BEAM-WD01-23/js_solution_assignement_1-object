
//Assignment II
//question i
  const person = {
    name: "Katarina",
    age: 40,
    gender: "Female",
    hobbies: ["sport", "traveling", "cooking"],
    //a
    introduce() {
      return `This is ${this.name} she is ${this.age} years old, she is ${this.gender} and she likes : ${this.hobbies}`;
    },//b
    addHobby(addOne){
      let addMoreHobby = person.hobbies.push(addOne);
      return addMoreHobby
      },
    //c
    removeHobby(){
      // let removeOneHobby = person.hobbies.pop();
      // return removeOneHobby;
      //or
      delete person['hobbies'];
    },
    //d 
    listHobbies(){
      for(let a=0; a<person.hobbies.length; a++){
        console.log(person.hobbies[a]);
      }
    }
  }; 
  //console.log(person.introduce());//a
  //console.log(person.addHobby('gaming'));//b  gaming added to the array of hobbies
  //console.log(person.removeHobby());//c delete one or delete all with delete methode ...
  //console.log(person.listHobbies());//d
 

//question ii
  const car = {
    make: "Japan",
    model: "Toyota",
    year: 2019,
    price: 45000,
    checkProperty() {//v
      console.log(car.hasOwnProperty("make")); //if we replace with name, gives false ...
    },
    //vi calculate vlaueOf()
    calculateValue(car, depreciation) {
      let whatIsDepreciated = car.price * depreciation; //3330
        //console.log(whatIsAdded)
      let currentValue = car.price - whatIsDepreciated;
      return currentValue;
    },
    //vii show list 
    listValues() {
      return Object.values(car);
    },
    //viii list keys 
    listKeys() {
      return Object.keys(car);
    },
    //ix 
    listEntries() {
      return Object.entries(car);
    },
    //x Object.freeze() to make object not active, not changed
    lock() {
      return Object.freeze(car);
    },
    //xi 
    createCopy(){
      const newObject = Object.create(car);
       let one = newObject.make = 'USA';
      let two = newObject.model = 'Ford';
      console.log(one, two);
    },
    //xii
    updateInfo(car){
        car.make = 'Germany';
        car.model = 'Audi';
        return car;
        },
    //or, with Object.assign() method, z below ...
    updateInfo() {
      const updatedCar = Object.assign(
        {},
        {
          //with z word this, just before { we ll see z entire runction, witout just what has changed ...
          make: "Germany",
          model: "Audi",
        }
      );
      return updatedCar;
    },
  };
  
  //console.log(car.checkProperty()); //v
  console.log(car.calculateValue(car, .074));//vi 41670
  console.log(car.listValues());//vii 
  console.log(car.listKeys());//viii
  console.log(car.listEntries());//ix 
  console.log(car.lock());//x 
  console.log(car.createCopy());//xi 
  console.log(car.updateInfo());//xii
  console.log(car.updateInfo());//xii 
  