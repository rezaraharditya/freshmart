const express = require('express')
const app = express()
const port = 3000
var productsRoutes = require('./routes/products')
var mysql = require('mysql')

app.get('/', (req,res) => {
    res.sendFile('index.html',{root: __dirname})
})  
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
  });

connection.connect(function(err){
    if(err){
        console.log('koneksi error'+ error.stack)
        return;
    } console.log('koneksi berhasil')
})


app.use('/products',productsRoutes)

app.listen(port,()=>{
    console.log(`Menggunakan port ${port}`)
})