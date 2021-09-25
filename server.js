const express = require('express')
const app = express()
const server= require('http').Server(app)
const {v4:uuidv4}= require('uuid')
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('room')
})









server.listen(8000)