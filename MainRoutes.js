module.exports = app=>{
    app.use('/students',require('./StudentModel/Routes/index'))
}