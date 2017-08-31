function foo(num) {
  console.log("foo: " + i);

  this.count++;
}

foo.count = 0;
this.count = 0;

var i;

for(i = 0; i < 10; i++) {
  if( i > 5) {
    foo(i);
  }
}

console.log(foo.count);
console.log(this.count);
