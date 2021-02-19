var mongoose=require("mongoose");
var CustomerSchema=new mongoose.Schema({
    customername:String,
    customerid:String,
    customeremail:String,
    companyname:String,
    companybusinesstype:String,
    companyphoneno:Number,
    companypersonname:String,
    companypersonphoneno:Number,
    companypersonemail:String,
    companypersonlocation:String
});
module.exports=mongoose.model('CustomerDatabase',CustomerSchema);