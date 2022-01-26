var express = require('express')
var router = express.Router()

router.get('/', function(req,res){
    res.sendFile('../views/products/products.html',{root:__dirname})
})

router.post('/product-details/$id', function(req,res){
    res.sendFile('../views/products/detail-products-$id',{root:__dirname})
})
module.exports = router