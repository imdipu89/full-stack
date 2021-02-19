var express=require('express');
var path=require("path")
var favicon=require("serve-favicon");
var logger=require("morgan");
var cookieParser=require("cookie-parser");
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/employee')
.then(()=>
    console.log("connected successfullt"))
    .catch((err)=> console.log(err));
var index=require("./routes/index") ;
var users=require('./routes/users');
var employees=require('./routes/employees');
var app=express();
//view engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//uncomment after placing favicon in/public
//app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use("/",index);
app.use('/users',users);
app.use('/employees',employees);
//catch 404 amd forward to error handler
app.use(function(req,res,next){
    var err=new Error('Not Found');
    err.status=404;
    next(err);
});
//error handeler
app.use(function(err,req,res,next){
    //set local only providing error in devlopemnet
    res.locals.message =err.message;
    res.locals.error =res.app.get('env') === 'devlopment' ? err: {};
    res.status(err.status || 500);
    res.render('error')
});
app.listen(4000,function() {
    console.log("server is running");
})