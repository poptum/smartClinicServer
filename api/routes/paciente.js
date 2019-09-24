const anamnese = require("../../db/models").anamnese;
const historia_familiar = require("../../db/models").historia_familiar;
const hmp = require("../../db/models").hmp;
const paciente = require("../../db/models").paciente;
const auth = require('../auth.js');
module.exports = function(router) {
  router.post("/paciente", auth,function(req, res) {
      return paciente
        .create(req.body)
        .then(todo => res.status(201).send("usuario registrado"))
        .catch(error => console.log(error));
  });
  router.post("/anamnese", auth,function(req, res) {
    return anamnese
      .create(req.body)
      .then(todo => res.status(201).send("usuario registrado"))
      .catch(error => console.log(error));
});
router.post("/hmp", auth,function(req, res) {
    return hmp
      .create(req.body)
      .then(todo => res.status(201).send("usuario registrado"))
      .catch(error => console.log(error));
});
router.post("/historia_familiar", auth,function(req, res) {
    return historia_familiar
      .create(req.body)
      .then(todo => res.status(201).send("usuario registrado"))
      .catch(error => console.log(error));
});

  router.get("/pacientes", auth, function(req, res) {
    return paciente
    .findAll({
        include: [
            { model: anamnese, as: 'anamnese' },
            { model: hmp, as: 'hmp' },
            { model: historia_familiar, as: 'historia_familiar' }
        ]
    })
    .then(users => res.status(200).send(users))
    .catch(error => console.log(error),res.status(400).send("error"));
  });
};
