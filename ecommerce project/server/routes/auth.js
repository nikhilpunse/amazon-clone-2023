const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('../keys')
const requireLogin = require('../middleware/requireLogin')
const nodemailer = require('nodemailer')
const crypto = require('crypto')


router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    
    if(!name || !email || !password){
        return res.status(422).json({error:'please enter all input field'})
    }
    User.findOne({email:email}).then(userData=>{
        if(userData){
            return res.status(422).json({error:'User already exist with given email.'})
        }

        bcrypt.hash(password,12).then(hashPassword=>{
            const user = new User({
                name,email,password:hashPassword
            })
            user.save()
            .then(savedUser=>{
                
                if(savedUser){

                    let mailTransporter = nodemailer.createTransport({
                        service:'gmail',
                        auth:{
                            user:'nikhil.punse5@gmail.com',
                            pass:'fomhfgqghgrvexxj'
                        }
                    })

                    let details = {
                        to:user.email,
                        from:'nikhil.punse5@gmail.com',
                        subject:'testing our node mailer',
                        html:'<h1>Welcome to Amazon</h1>'
                       }
        
                       mailTransporter.sendMail(details,(err)=>{
                            if(err){
                                console.log('Error occured',err)
                            }else{
                                console.log('Email sended successfuly.')
                            }
                       })

                    res.json({message:'saved successfuly'})
                }
            }).catch(err=>{
                res.json({error:'error in storing user data.'})
                console.log(err)
            })
        })

        
    }).catch(err=>{
        console.log(err)
    })
})


router.post('/login',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error : 'please fill all inputs.'})
    }
    User.findOne({email:email}).then(userData=>{
        if(!userData){
            return res.status(404).json({error : 'user does not exist with this email.'})
        }
        bcrypt.compare(password,userData.password).then(doMatch=>{
            if(!doMatch){
                return res.status(404).json({error : 'wrong password entered.'})
            }
            const token = jwt.sign({_id:userData._id},SECRET_KEY)
            res.json({token,user:{_id:userData._id,
                            name:userData.name,
                            email:userData.email,
                        }})
        }).catch(err=>{
            console.log(err)
        })

    }).catch(err=>{
        console.log(err);
    })
})


module.exports = router