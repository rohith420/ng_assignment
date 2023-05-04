const {students} =require('../index')

module.exports.createStudents = body=>{
    return students.create(body)
}

module.exports.getStudents = ()=>{
    return students.find()
}

module.exports.getStudentById =(filterQuery)=>{
    return students.findById(filterQuery)
}

module.exports.deleteStudent = (filterQuery)=>{
    return students.findByIdAndDelete(filterQuery)
}

module.exports.updateStudent = (filterQuery,body)=>{
    return students.findOneAndUpdate(filterQuery,body)
}
