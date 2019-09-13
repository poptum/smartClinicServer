const profile = require("../../db/models").profile;
const user = require("../../db/models").user;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secret = "mysecretsshhh";
const auth = require('../auth.js');
module.exports = function(router) {
  router.post("/login", function(req, res) {
      console.log("login");
      user
        .findOne({
          where: { email: req.email }
        })
        .then(userDb => {
          bcrypt.compare(req.body.password, userDb.password, function(err, decryptPwd) {
            if (!decryptPwd) {
              res.status(400).send("senha errada");
            } else {
              //assina token e retorna pro app
              // Issue token
              const payload = { email: userDb.email };
              const token = jwt.sign(payload, secret, {
                expiresIn: "1h"
              });
              res.send({token}).sendStatus(200);
            }
          });
        })
        .catch(error => res.status(400).send("email incorreto"));
  });

  router.post("/user", function(req, res) {
    bcrypt.hash(req.password, saltRounds, function(err, hash) {
      console.log("login");
      return user
        .create({
          name: req.name,
          password: hash,
          email: req.email,
          profile: req.profile
        })
        .then(todo => res.status(201).send("usuario registrado"))
        .catch(error => res.status(400).send("error"));
    });
  });

  router.get("/users", auth, function(req, res) {
    return res.send("users");
    // Status.find().exec()
    //   .then(docs => res.status(200)
    //     .json(docs))
    //   .catch(err => res.status(500)
    //     .json({
    //       message: 'Error finding user',
    //       error: err
    //     }))
  });
  router.get("/user1", function(req, res) {
    return res.send("users");
    // Status.find().exec()
    //   .then(docs => res.status(200)
    //     .json(docs))
    //   .catch(err => res.status(500)
    //     .json({
    //       message: 'Error finding user',
    //       error: err
    //     }))
  });
};
