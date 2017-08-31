const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");
// const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  weight: Number,
  isRich: Boolean
})

UserSchema.methods.name = function() {
  return `Hello, my name ${ this.fname } ${ this.lname} and I weigh ${ weight } pounds!`
}

UserSchema.statics.findHappyPeople = function() {
  return User.$where('this.weight > 200 && this.isRich');
}

UserSchema.virtual('fullname').set(function(name) {
  [this.fname, this.lname] = name.split(' ');
})

// Example taken straight from the Viking Code School Archives
// UserSchema.virtual('password').set(function(password) {
//   this.passwordHash = bcrypt.compareSync(password, this.passwordHash);
// })



const User = mongoose.model('User', UserSchema);

module.exports = User;
