var mongoose=require('mongoose');
var TestSchema= new mongoose.Schema({
    name:String,
    course:String,
    phoneno:Number,
    updated_at:{type:Date,default:Date.now}
})
module.exports=mongoose.model("Test",TestSchema);