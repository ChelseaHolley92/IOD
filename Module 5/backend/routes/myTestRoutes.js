const express = require('express')
const router = express.Routers()

Router.get('/test', (req, res) => {
    res.send('Hello World!2')
})

router.get('/test2', (req, res) => {
    res.send('Second test')
    })
    
    module.exports = router;