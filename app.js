const express = require('express')
const app = express()


require("./model/index")

//setting view engine to ejs
app.set('view engine','ejs')

//Home page
app.get('/',(req,res)=>{
   res.render(`home`)
})

//About page
app.get('/about',(req,res)=>{
    res.render('about')
})


//Blogs page
app.get('/blogs',(req,res)=>{
    res.render('blogs')
})

// Contact page
app.get('/contact',(req,res)=>{
    res.render('contact')
})


const PORT = 3000
app.listen(PORT,()=>{
    console.log('Nodejs has started at port ${PORT}')
})