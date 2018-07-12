const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const FullSchema = mongoose.Schema ({
  pickuptime: {
    type: String,
    required: true
  },
  pickupdate: {
    type: String,
    required: true
  },
  startlocation: {
    type: String,
    required: true
  },
  droptime: {
    type: String,
    required: true
  },
  dropdate: {
    type: String,
    required: true
  }
  // endlocation: {
  //   type: String,
  //   required: true
  // }
});

const Fulldata = module.exports = mongoose.model('fulldata', FullSchema);
/*
module.exports.getUserById = function(id, callback) {
    Fulldata.findById(id, callback);
}*/
/*
module.exports.getUserByUsername = function(startlocation, callback) {
  const query = {startlocation: startlocation}
  Fulldata.findOne(query, callback);
}*/

module.exports.addUser = function(newUser, callback) {
  //bcrypt.genSalt(10, (err, salt) => {
    //bcrypt.hash(newUser.password, salt, (err, hash) => {
      //if(err) throw err;
      //newUser.password = hash;
      newUser.save(callback);
    //});
  //});
}

/*module.exports.addUser = function(newUser1, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser1.conpassword, salt, (err, hash) => {
      if(err) throw err;
      newUser1.conpassword = hash;
      newUser1.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
*/
