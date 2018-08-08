const router = require('express').Router()


router.get('/', function(req, res) {
    res.send('Alive')
})

module.exports = router