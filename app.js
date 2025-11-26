const express = require('express')
const app = express()


require("./model/index")

//setting view engine to ejs
app.set('view engine','ejs')

//Home page
app.get('/',(req,res)=>{
   res.render(`home`)
})


const PORT = 3000
app.listen(PORT,()=>{
    console.log('Nodejs has started at port ${PORT}')
})