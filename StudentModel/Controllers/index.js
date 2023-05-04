const {createStudents,getStudents,getStudentById,deleteStudent,updateStudent }= require('../Methods/index')


module.exports.createStudents = async(req,res)=>{
    const data = await createStudents(req.body)
    res.send("Created Student Successfully") 
}
module.exports.getStudents =async (req,res)=>{
    const data  =  await getStudents(req.body)
    res.send(data)

}

module.exports.getStudentById =async (req,res)=>{
    const data  = await getStudentById(req.params.id)
    res.send(data)
}


module.exports.deleteStudent=async (req,res)=>{
    const data  = await deleteStudent(req.params.id)
    res.send("Deleted Student successfully")
}

module.exports.updateStudent = async (req,res)=>{
    const filterQuery = {_id:req.params.id}
    const updatingData =await updateStudent(
        filterQuery,{...req.body}
    )
    
    res.send("Data Updated Successfully")
}












