const express = require("express")
const app = express()


require("./model/index")

app.set("view engine","ejs")

app.use(express.urlencoded({extended:true})) //only HTML use vako cha vane yo use garney.
app.use(express.json()) //React use vako cha vane yo use garney.

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/addblog",(req,res)=>{
    res.render("addBlog")
})


app.post("/addblog",(req,res)=>{
    console.log(req.body)
})

const PORT=3000
app.listen(PORT,()=>{
    console.log(`Project has started at port ${PORT}`)
})