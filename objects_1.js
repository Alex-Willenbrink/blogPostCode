"use strict";

// Option 1 (BEST OPTION FOR 1 TIME USE)
let car = {
  color: "red",

  wheels: 4,

  carState: false,

  toggleCar: function(){
    if(this.carState){
      this.carState = false;
      console.log("Car says, 'bloop'");
    } else {
      this.carState = true;
      console.log("Car says, 'VROOM, LET'S RIDE!'")
    }
  }
}


console.log(car.wheels);
let car_2 = car;
car_2.wheels = 5;

console.log(car.color);

car.toggleCar();
car.toggleCar();
console.log(car.wheels);
