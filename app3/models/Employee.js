var mongoose=require("mongoose");
const { stringify } = require("querystring");
var EmployeeSchema = new mongoose.Schema({
    name:String,
    department:String,
    position:String,
    phoneno:Number,
    salary:Number,
    updates_at:{type:Date,default :Date.now}
})
module.exports=mongoose.model('Employee',EmployeeSchema);