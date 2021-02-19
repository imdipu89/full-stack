const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
var swapCase = require('swapcase');
const app=express();
app.use(cors());
app.use(bodyParser.json());
//app.use(swapCase.json());
//route for server
//app.get('/',function(req,res){
//    res.send("hello world");
//})
//app.post('/case',function(req,res){
//    var string=req.body.string;
//    var caseString=swapCase(string);
//    res.json({caseString:caseString});

//})
app.listen(5000,()=>{
console.log("the server is listening at port  5000");
});