const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})

mongoose.model('Product',productSchema)
