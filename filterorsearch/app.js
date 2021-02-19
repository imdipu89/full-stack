var express=require("express");
var app=express();
var path=require("path");
var bodyParser=require("body-parser");
var cookieParser=require('cookie-parser');
var logger=require("morgan");
var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost/mydb")
 .then(() =>console.log("databse connected"))
 .catch((err)=> console.log(err));
app.set('views',path.join(__dirname,'views'));
app.set("view engine",'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(logger('dev'));
var employees=require("./routes/employees");
app.use('/employees',employees);
app.use(express.static(path.join(__dirname,'public')));
app.use(function(req,res,next){
    var err= new Error("not found");
    err.status=404;
    next(err);
});
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    
    res.status(err.status || 500);
    res.render('error');
  })
app.listen(784,function(){
    console.log("database is connected");
});
//<td><a href="/employee/filter/<5= employee[i]._id">filter data</a></td>