const profile = require('../../db/models').profile;


module.exports = function (router) {
 
  router.post('/login', function (req, res) {
    console.log('login')
    return profile
      .create({
        profile: 'teste',
      })
      .then(todo => res.status(201).send('feito'))
      .catch(error => res.status(400).send('error'));
  })

  router.get('/user', function (req, res) {
    console.log('login')
    return profile
      .create({
        profile: 'teste',
      })
      .then(todo => res.status(201).send('feito'))
      .catch(error => console.log(error));
  })

  router.get('/users', function (req, res) {
    return res.send('users')
    // Status.find().exec()
    //   .then(docs => res.status(200)
    //     .json(docs))
    //   .catch(err => res.status(500)
    //     .json({
    //       message: 'Error finding user',
    //       error: err
    //     }))
  })
}
