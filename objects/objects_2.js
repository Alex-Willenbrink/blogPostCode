"use strict";

// Option 2
let car = new Object();
car.color = "orange";
car.wheels = 4;
car.carState = true;
car.toggleCar = function(){
  if(this.carState){
    this.carState = false;
    console.log("Car says, 'zoom'");
  } else {
    this.carState = true;
    console.log("Car says, 'VROOM, LET'S RIDE!'")
  }
};

console.log(car.color);
car.toggleCar();
car.toggleCar();
