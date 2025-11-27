const express = require("express")
const { blogs } = require("./model/index") 
const { users } = require("./model/index") 
const { reggits } = require("./model/index") 
const app = express()


require("./model/index")

app.set("view engine","ejs")

app.use(express.urlencoded({extended:true})) //only HTML use vako cha vane yo use garney.
// app.use(express.json()) //React use vako cha vane yo use garney.

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/addblog",(req,res)=>{
    res.render("addBlog")
})

app.post("/userblog",async(req,res)=>{
    console.log(req.body)
    const {fullName, email, number, address, message} = req.body

   await blogs.create({
        fullName: fullName,
        email: email,
        number: number,
        address: address,
        message: message,
        
    })
    res.send("Success")

})

app.get("/userblog",(req,res)=>{
    res.render("userBlog")
})

app.post("/userblog",async(req,res)=>{
    console.log(req.body)
    const {fullName, email, number, address, message} = req.body

   await users.create({
        fullName: fullName,
        email: email,
        number: number,
        address: address,
        message: message,
        
    })
    res.send("Success")
    
})

app.get("/reggitblog",(req,res)=>{
    res.render("reggitBlog")
})

app.post("/reggitBlog",async(req,res)=>{
    console.log(req.body)
    const {fullName, email, number, address, message} = req.body

   await reggits.create({
        fullName: fullName,
        email: email,
        number: number,
        address: address,
        message: message,
        
    })
    res.send("Success")

})



const PORT=3000
app.listen(PORT,()=>{
    console.log(`Project has started at port ${PORT}`)
})