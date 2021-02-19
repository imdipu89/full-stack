var express=require('express');
var bodyParser=require("body-parser");
var logger=require("morgan");
var cookieParser=require("cookie-parser");
var path=require("path");
var mongoose=require("mongoose");
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost/mydb")
 .then(()=> console.log("connect database sucessfully"))
 .catch((err) => console.log(err));
 var app=express();
 app.set('views',path.join(__dirname,'views'));
 app.set('ejs','view engine');
 app.use(logger('dev'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(cookieParser());
 app.use(express.static(path.join(__dirname,'public')));
 var student=require("./routes/student")

 app.use('/api', student);
 app.listen(5000,function(){
     console.log("app is running");
 })