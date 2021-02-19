var express=require("express")
var path=require('path');
var logger=require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/search_data')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
var tests=require('./routers/test'); 
var app = express();
app.set('views',path.join(__dirname,'views'));
app.set("view engine","ejs");
app.use(logger());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/',index);
app.use('/tests',tests);
app.use(function(err, req, res, next) {
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};   
res.status(err.status || 500);
res.render('error');
});
app.listen(305, function(){
    console.log("Server is running");
});