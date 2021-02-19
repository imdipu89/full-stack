var mongoose=require('mongoose');
var TeacherSchema=new mongoose.Schema({
    name:String,
    department:String,
    email:String,
    phoneno:Number,
    address:String,
    salary:Number,
    updated_at:{type:Date,default:Date.now},
});
module.exports=mongoose.model('Teacher' ,TeacherSchema);