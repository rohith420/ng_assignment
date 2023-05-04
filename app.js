var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')
var bodyparser = require('body-parser')
require('dotenv').config()
var app=express()
app.use(bodyparser.json())

app.use(cors({
    origin:"*"
}))
const port = process.env.PORT || 2000
const connect = ()=>{
    return mongoose.connect(`mongodb+srv://rbjuly31:${process.env.PASSWORD}@cluster0.15vxajj.mongodb.net/test`)
}
require('./MainRoutes')(app)
app.listen(port,()=>{
    connect()
})
