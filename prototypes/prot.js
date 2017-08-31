"use strict";

// Mammal Obect Constructor
function Mammal() {
}

Mammal.prototype.talk = function() {
  console.log("I am a mammal!");
}

Mammal.prototype.sing = function() {
  console.log("LA LA LA LA!");
}

// Whale Object Constructor
function Whale(species) {
  Mammal.call(this);
  this.species = species;
}

Whale.prototype = Object.create(Mammal.prototype);

/////WHAT DOES THIS LINE DO????????????????
Whale.prototype.constructor = Whale;

/*
// Works just as well as above constructor
let Whale = function(species) {
  this.species = species;
}
*/

Whale.prototype.talk = function() {
  console.log(`I am a ${this.species} whale!`);
}

Whale.prototype.swim = function() {
  console.log("Whale swims a bit");
}

// instance of whale
let blue = new Whale("Blue");
blue.talk();
blue.swim();
blue.sing();


Mammal.read = () => {console.log("I'm reading a book!");}
Mammal.read();
/*
console.log(Mammal);

let cow = new Mammal();
console.log(cow);
*/
