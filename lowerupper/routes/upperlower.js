var express=require('express');
var route= express.Router();
var lowerupper=require("../controllers/lowerupperConroller");
route.get('/',function(req, res){
    lowerupper.list(req,res);
});
route.post("/case",function(req, res){
    lowerupper.case(req,res);
});
module.exports=route;

