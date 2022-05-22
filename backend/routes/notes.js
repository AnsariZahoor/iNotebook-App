const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send('Notes endpoint')
})

module.exports = router