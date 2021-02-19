var express=require('express');
const { Mongoose } = require('mongoose');
var router=express.Router()
var test=require('../controllers/TestController')
router.get('/',function(req,res){
    test.list(req,res);
});
router.get('/search/:id',function(req,res){
    test.search(req,res);
});
module.exports=router;