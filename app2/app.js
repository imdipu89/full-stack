var express=require("express");
var path=require("path");
var favicon=require("serve-favicon");
var logger=require("morgan");
var cookieParser=require('cookie-parser')
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost/student')
.then(() => console.log('Student Database connection successfuly established'))
.catch((err) => console.error(err));
mongoose.createConnection("mongodb://localhost/teacher")
//.then(() => console.log(' Teacher Database connection successfuly established'))
//.catch((err) => console.error(err));
mongoose.createConnection("mongodb://localhost/employee")

var index=require('./routers/index');
var users=require('./routers/users');
var students=require('./routers/students');
var teachers=require('./routers/teachers');
var employees=require('./routers/employees');
var app=express();
//engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
//app.use(express.static(path.join(__dirname,'views')));

app.use('/',index);
app.use('/users',users);
app.use('/students',students);
app.use('/teachers',teachers);
app.use('/employees',employees)
//error
app.use(function(req,res,next){
    var err=new Error('not found');
    err.status=404;
    next(err);
});
//error handle
app.use(function(err,req,res,next){
    res.locals.message=err.message;
    res.locals.error=req.app.get('env')=== 'devlopment'
    res.status(err.status || 500);
    res.render('error');
});
app.listen(15000,function(){
    console.log("server is running");
})
