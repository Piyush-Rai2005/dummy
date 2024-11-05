import express from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'

const router = express.Router();


router.post('/signup',async(req, res)=>{
    const {name, regno,email, password}= req.body;
    const user= await User.findOne({regno})
    if(user){
        return res.json({message: "user already exist"})
    }

    const hashpassword= await bcrypt.hash(password, 10)
    const newUser = new User({
        name,
        regno,
        email,
        password: hashpassword
    })

    await newUser.save()
    return res.json({status: true, message: "user records registered"})
})

router.post('/login', async(req, res)=>{
    const{regno, password}= req.body;
    const user= await User.findOne({regno})
    if(!user){
        return res.json({message: "user is not registered"})
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword){
        return res.json({message: "password is incorrect"})
    }

    const token = jwt.sign({name: user.name},process.env.KEY,{expiresIn: '1min'})
    res.cookie('token', token,{maxAge: 6000})
    return res.json({status: true, message: "login successfully"})
})

export { router as UserRouter}





