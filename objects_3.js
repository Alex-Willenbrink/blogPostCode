"use strict";

// Option 3 (PREFERRED)
function Car(color, wheels, carState){
  this.color = color;
  this.wheels = wheels;
  this.carState = carState;
  this.toggleCar = function(){
    if(this.carState){
      this.carState = false;
      console.log("Car says, 'bloop'");
    } else {
      this.carState = true;
      console.log("Car says, 'VROOM, LET'S RIDE!'")
    }
  }
}

let car = new Car("blue", 4, true);
console.log(car.color);
car.toggleCar();
car.toggleCar();

let clownCar = new Car("poka dotted", 4, false);
console.log(clownCar.color);
clownCar.toggleCar();
clownCar.toggleCar();
