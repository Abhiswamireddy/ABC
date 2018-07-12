const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Fulldata = require('../models/fulldata');

// Register
router.post('/register', (req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  let newUser = new User ({
    //_id:req.body.username,
    username: req.body.username,
    email: req.body.email,
    phno: req.body.phno,
    password: req.body.password,
    conpassword: req.body.conpassword
  });
  console.log(newUser);

  User.addUser(newUser, (err, user) => {
    if(err) {
      console.log({success: false, msg: 'Failed to register user'});
      res.json({success: false, msg: 'Failed to register user'});
      //res.json({success: false, msg: 'Failed to register user'});
    } else {
            console.log({success: true, msg: 'registered in User and Alluser Collection'});
            res.json({success: true, msg: 'registered in User and Alluser Collection'});
          }
        });
  });

  //profile
  router.post('/profile', function (req, res) {
    User.find({ 'username': req.body.username }, function (err, result) {
      if (err) throw err;
      else {
        if (result.length > 0) {
          res.json(result);
  
        }
        else {
         // res.json("user not defined");
        }
      }
    });
  });

  //full-data
  router.post('/bikepick', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    let newUser = new Fulldata ({
      //_id:req.body.username,
      pickupdate: req.body.pickupdate,
      pickuptime: req.body.pickuptime,
      startlocation: req.body.startlocation,
      dropdate: req.body.dropdate,
      droptime: req.body.droptime
     // endlocation: req.body.endlocation
    });
    console.log(newUser);
  
    Fulldata.addUser(newUser, (err, user) => {
      if(err) {
        console.log({success: false, msg: 'Failed to register user'});
        res.json({success: false, msg: 'Failed to register user'});
        //res.json({success: false, msg: 'Failed to register user'});
      } else {
              console.log({success: true, msg: 'registered in User and Alluser Collection'});
              res.json({success: true, msg: 'registered in User and Alluser Collection'});
            }
          });
    });

//GET All Users
router.get('/getallusers', (req, res, next) => {
  User.find({},function(err,userdata){
    if(err)
    {
      console.log(err);
    }
    else{
    console.log(userdata);
    res.json(userdata);
  }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'Bearer '+token,
          user: 
          {
            id: user._id,
            //name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});
// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
