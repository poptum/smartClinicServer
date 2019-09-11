// const Maquinas = require('../../models/maquinas')

// module.exports = function (router) {
//   router.get('/findMaquinas', function (req, res) {
//     Maquinas.find().exec()
//       .then(docs => res.status(200)
//         .json(docs))
//       .catch(err => res.status(500)
//         .json({
//           message: 'Error finding user',
//           error: err
//         }))
//   })

//   router.post('/insertMaquina', function (req, res) {
//     if (req.body._id) {
//       Maquinas.findByIdAndUpdate(req.body._id, { name: req.body.name }, { upsert: true }, function (err, doc) {
//         if (err) {
//           console.log(err)
//           return res.send(500).send({ error: err })
//         }
//         return res.send('succesfully saved')
//       })
//     } else {
//       var query = { 'name': req.body.name }
//       Maquinas.findOneAndUpdate(query, { name: req.body.name }, { upsert: true }, function (err, doc) {
//         if (err) {
//           console.log(err)
//           return res.send(500).send({ error: err })
//         }
//         return res.send('succesfully saved')
//       })
//     }
//   })

//   router.post('/deleteMaquina', function (req, res) {
//     Maquinas.findByIdAndRemove(req.body._id, function (err, doc) {
//       if (err) return res.send(500, { error: err })
//       return res.send('succesfully removed')
//     })
//   })
// }
