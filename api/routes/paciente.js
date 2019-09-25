const anamnese = require("../../db/models").anamnese;
const historia_familiar = require("../../db/models").historia_familiar;
const hmp = require("../../db/models").hmp;
const paciente = require("../../db/models").paciente;
const auth = require('../auth.js');
module.exports = function(router) {
  router.post("/paciente", auth,function(req, res) {
      return paciente
        .create(req.body)
        .then(user => res.status(200).send({mensagem:"Dados pessoais cadastrados", id:user.id}))
        .catch(error => console.log(error));
  });
  router.post("/paciente/update_etapa", auth,function(req, res) {
    return paciente
      .update({etapa_cadastro:req.body.etapa_cadastro}, { where: {id:req.body.id}})
      .then(todo => res.status(201).send("usuario registrado"))
      .catch(error => console.log(error));
});
  router.post("/anamnese", auth,function(req, res) {
    anamnese
      .create(req.body)
      .then(anamnese => {
        paciente.update({anamnese:anamnese.id, etapa_cadastro: req.body.etapa_cadastro},{where:{id:req.body.paciente}}).then(paciente => {
          res.status(200).send({mensagem:"Anamnese cadastrada", id:user.id})
        })
      })
      .catch(error => console.log(error));
});
router.post("/hmp", auth,function(req, res) {
    return hmp
      .create(req.body)
      .then(hmp => {
        paciente.update({hmp:hmp.id, etapa_cadastro: req.body.etapa_cadastro},{where:{id:req.body.paciente}}).then(paciente => {
          res.status(200).send({mensagem:"História Médica Pregressa cadastrada", id:user.id})
        })
      })
      .catch(error => console.log(error)); 
});
router.post("/historiaFamiliar", auth,function(req, res) {
    return historia_familiar
      .create(req.body)
      .then(historia_familiar => {
        paciente.update({historia_familiar:historia_familiar.id, etapa_cadastro: req.body.etapa_cadastro},{where:{id:req.body.paciente}}).then(paciente => {
          res.status(200).send({mensagem:"História familiar cadastrada", id:user.id})
        })
      })
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
