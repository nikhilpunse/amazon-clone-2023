const express = require('express')
const mongoose = require('mongoose')
const app = express()
const  PORT = 5000
const {MONGOURI} = require('./keys')

mongoose.connect(MONGOURI);
mongoose.connection.on('connected',()=>{
    console.log('connected to database successfuly');
})
mongoose.connection.on('error',(err)=>{
    console.log('error in database connection',err)
})

require('./model/user')
require('./model/product')
require('./model/order')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/products'))
app.use(require('./routes/orders'))

app.get('/',(req,res)=>{
    res.send('hello world.')
})

app.listen(PORT,()=>{
    console.log('server listening on port no', PORT)
})