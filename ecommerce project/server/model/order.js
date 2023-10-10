const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    products:[],
    orderBy:{
        type:String,
        required:true
    },
    totalAmount:{
        type:Number,
    }
})

mongoose.model('Order',orderSchema)
