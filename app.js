const express = require("express");
const User = require("./models/users")
const app = express()
require("./database/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const port = process.env.PORT ||  1200 



app.get('/', async(req,res)=>{
    try{
     let user = await User.find({})
     if(user!==null){
    
         res.status(200).json({

             user:user
         })
     }else{
        res.status(200).json({
            message:"no user record found",
          
        })
     }
    }catch(e){
        console.log(e)
     res.status(400).json({error:"error occured"})
    }
})

app.post('/save-user', async(req,res)=>{
   try{
    let user = new User(req.body) 
    if(user){
      let use = await user.save()
        res.status(200).json({
            message:"your details are saved successfully",
            user:use
        })
    }
   }catch(e){
       console.log(e)
    res.status(400).json({e})
   }
   
 
   });

app.get('/get-user/:id', async(req,res)=>{
    try{
        const id = req.params.id
       let users = await User.findOne({_id:id})
       if(users){
        res.status(200).json({users})
   
       }else{
        res.status(402).json({message:"users not found"})
       }
    }catch(e){
        console.log(e)
        res.status(400).json({e})
    }
 });





 app.post('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id
       let user = await User.findByIdAndDelete({_id:id})
       if(user){
        res.status(200).json({
            message:"Deleted successfully"
        })
       }
    }catch(e){
        console.log(e)
        res.status(400).json({e})
    }
 });

app.put('/update/:id', async(req,res)=>{
    try{
        const id = req.params.id
       let user = await User.findByIdAndUpdate({_id:id},req.body)
       if(user){
        res.status(200).json({
            message:"updated successfully"
        })
       }else{
        res.status(402).json({message:"unable to edit data"})
       }
    }catch(e){
        console.log(e)
        res.status(400).json({e})
    }
 });

app.listen(port,()=>{
    console.log("port listening.....")
})