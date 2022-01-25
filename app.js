const express = require('express')
const app = express()
const port = 3000
var productsRoutes = require('./routes/products')

app.get('/', (req,res) => {
    res.sendFile('index.html',{root: __dirname})
})  

app.use('/products',productsRoutes)

app.listen(port,()=>{
    console.log(`Menggunakan port ${port}`)
})