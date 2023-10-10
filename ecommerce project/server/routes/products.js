const { Router } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Product = mongoose.model('Product')

router.get('/getproduct/',requireLogin,(req,res)=>{
    Product.find({category:'mobile'})
    .then(result=>{
        res.json({result})
    }).catch(err=>{
        console.log('error: ',err)
    })
})


router.post('/addproduct',(req,res)=>{
    const {category,link,price,quantity,description} = req.body
    if(!category || !link || !price || !quantity || !description){
        return res.status(422).json({error:'please fill all input fields.'})
    }
    
    new Product({category,link,price,quantity,description}).save()
    .then(result=>{
        if(result){
            res.json({message:'Item added successfuly.'})
            }

    })
    .catch(err=>{
        console.log('error',err)
    })

})



module.exports = router