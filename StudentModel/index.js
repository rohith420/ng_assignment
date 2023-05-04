var mongoose = require('mongoose')
const studentsSchema  =  new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    email:{
        type:String
    }

},
{
    timestamps:true
})
module.exports.students = new mongoose.model('students',studentsSchema)