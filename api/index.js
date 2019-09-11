const express = require('express')
const router = express.Router()

// require('./routes/login.js')(router)
require('./routes/user.js')(router)

module.exports = router
