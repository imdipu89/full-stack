var express=require("express");
var path=require("path");
var mongoose=require('mongoose');
var logger=require('morgan');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost/mydb')
.then(() => console.log('DataBase created'))
.catch((err) => console.error(err));
var employees=require('./routers/employees');
var students=require('./routers/students');
var teachers=require('./routers/teachers');
var index=require("./routers/index");
var users=require("./routers/users");
var app=express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use('/',index);
app.use("/users",users);
app.use('/teachers',teachers);
app.use('/students',students);
app.use('/employees',employees);


app.use(function(req,res,next){
    var err=new Error("not found");
    err.status=404;
    next(err);
});
app.use(function(err,req,res,next){
    res.locals.message=err.message;
    res.locals.error=req.app.get('env')==='devlopment'
    res.status(err.status || 500);
    res.render("error");
});
app.listen(12345,function(){
    console.log("Server is running");
})
