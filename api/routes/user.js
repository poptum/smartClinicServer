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
          where: { email: req.body.email }
        })
        .then(userDb => {
          bcrypt.compare(req.body.password, userDb.password, function(err, decryptPwd) {
            if (!decryptPwd) {
              res.status(400).send("Senha incorreta");
            } else {
              //assina token e retorna pro app
              // Issue token
              const payload = { email: userDb.email };
              const token = jwt.sign(payload, secret, {
                expiresIn: "1h"
              });
console.log("sucesso")
                 res.send({token});
            }
          });
        })
        .catch(error => res.status(400).send("email incorreto"));
  });
  router.post("/user", auth,function(req, res) {
      console.log("login");
 console.log("login123");
      return user
        .create(req.body)
        .then(todo => res.status(201).send("usuario registrado"))
        .catch(error => console.log(error));
  });

  router.get("/users", auth, function(req, res) {
console.log(`teste cookie`)
console.log(req.cookies)
    return user
    .findAll()
    .then(users => res.status(201).send(users))
    .catch(error => console.log(error),res.status(400).send("error"));
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
