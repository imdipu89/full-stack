var mongoose=require("mongoose");
const employeeController = require("../controllers/EmployeeController");
var EmployeeSchema=new mongoose.Schema({
    name:String,
    position: String,
    department:String,
    salary: Number,
    address: String,
    updated_at:{type:Date,default:Date.now},
});
module.exports=mongoose.model('Employee',employeeController);