var mongoose=require("mongoose");
var Test=require("../models/Test");
var testController={};
testController.list=function(req,res){
    Test.find({course:""}).exec(function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
};
