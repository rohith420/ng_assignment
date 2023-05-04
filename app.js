var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')
var bodyparser = require('body-parser')
var app=express()
app.use(bodyparser.json())

app.use(cors({
    origin:"*"
}))

const connect = ()=>{
    return mongoose.connect("mongodb+srv://rbjuly31:students@cluster0.15vxajj.mongodb.net/test")
}
require('./MainRoutes')(app)
app.listen(2000,()=>{
    connect()
})
