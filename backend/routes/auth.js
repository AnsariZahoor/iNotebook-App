const express = require('express')
const router = express.Router()

router.post('/createuser', (req, res) => {
    res.send('Auth endpoint')
})

module.exports = router