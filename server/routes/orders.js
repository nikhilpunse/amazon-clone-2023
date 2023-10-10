const { json } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Order = mongoose.model('Order')
const Product = mongoose.model('Product')


router.post('/placeorder',requireLogin,(req,res)=>{
    const {products,orderBy,totalAmount} = req.body
    if(!products || !orderBy || !totalAmount){
        return res.status(422).json({error:'please fill all input fields.'})
    }
    
    new Order({products,orderBy,totalAmount}).save()
    .then(result=>{
        if(result){
            res.json({message:'Order placed successfuly.'})
            }
    })
    .catch(err=>{
        console.log('error',err)
    })

    products.map(item=>{
        Product.findById(item._id)
        .then(output=>{            
            const newQuantity = output.quantity - item.orederQuntity
            Product.findByIdAndUpdate(item._id,{quantity:newQuantity},{new:true})
            .then(output=>{
                console.log('quantity updated')
            })
            .catch(err=>{
                console.log('error in updating quantity :',err)
            })
        })
    })
})

router.post('/cancelorder',(req,res)=>{
    const {id} =req.body

    Order.findById(id).then(targetorder=>{

        targetorder.products.map(item=>{
            Product.findById(item._id)
            .then(output=>{            
                const newQuantity = output.quantity + item.orederQuntity
                Product.findByIdAndUpdate(item._id,{quantity:newQuantity},{new:true})
                .then(output=>{
                    console.log('quantity updated')
                    if(output){
                        Order.findByIdAndDelete(id)
                        .then(removedItem=>{
                            console.log('Item removed.')
                        })
                        res.json({message:'Order cancelled.'})
                    }
                })
                .catch(err=>{
                    console.log('error in updating quantity :',err)
                })
            })
        })

        

        // res.json({result:targetorder.products})
    })

})


router.get('/getorders',requireLogin,(req,res)=>{
    Order.find({orderBy:req.user._id})
    .then(result=>{
        if(!result){
            return res.status(422).json({error:"You don't have Any orders."})
        }
        res.json({result})
    })
})


module.exports = router