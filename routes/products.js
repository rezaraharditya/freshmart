var express = require('express')
var router = express.Router()

router.get('/', function(req,res){
    res.sendFile('../views/products/products.html',{root:__dirname})
})

module.exports = router