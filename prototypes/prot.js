"use strict";

function Nullo(){};

let yes = new Nullo();
let obj = new Object();
Object.setPrototypeOf(obj, yes);

//
function plusTwo(x) {return x + 2;}

console.log(yes.prototype;
console.log(obj.prototype);
