const mongoose = require('mongoose');
const mongooseeder = require('mongooseeder');
const models = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require('./../config/mongo')[env]
const faker = require('faker');

const { User } = models;

const seeds = () => {
  let users = [];
  for (let i = 0; i < 10; i++) {
    // let user = new User({
    //   fname: faker.name.firstName(),
    //   lname: faker.name.lastName(),
    //   email: faker.internet.email(),
    //   password: faker.address.streetName(),
    //   weight: Math.round(Math.random() * 140 + 80),
    //   isRich: Math.random() > 0.5
    //     ? true
    //     : false
    // })

    let user = new User({
      fname: "abc",
      lname: "abc",
      email: "abc",
      password: "abc",
      weight: Math.round(Math.random() * 140 + 80),
      isRich: Math.random() > 0.5
        ? true
        : false
    })
    console.log(user);
    users.push(user);
  }

  let promises = [];
  users.forEach(doc => {
    promises.push(doc.save());
  });

  return Promise.all(promises);
}

const mongodbUrl = 'mongodb://localhost/your_db';

mongooseeder.seed({mongodbUrl: mongodbUrl, models: models, clean: true, mongoose: mongoose, seeds: seeds});
