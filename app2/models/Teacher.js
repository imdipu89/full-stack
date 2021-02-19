var mongoose=require("mongoose");
const teacherController = require("../controllers/TeacherController");
var TeacherSchema = new mongoose.Schema({
    name:String,
    address:String,
    position:String,
    salary:Number,
    updated_at:{type:Date,default:Date.now},
});
module.exports=mongoose.model("Teacher",teacherController);