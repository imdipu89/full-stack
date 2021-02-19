var express=require('express');
var app=express();
var path=require("path");
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var cors=require('cors');
var logger=require('morgan');
var mongoose=require('mongoose');
var orderRoute=require('./routes/Orderroute');
var customerRoute=require('./routes/Customerroute');
var productRoute=require('./routes/Productroute');
let dbConfig=require('./database/db');
mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
  }).then(() => {
    console.log('Database sucessfully connected!')
  },
    error => {
      console.log('Could not connect to database : ' + error)
    }
  )
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());
app.use('/orders',orderRoute);
app.use('/products',productRoute);
app.use("/customers",customerRoute);
const port =process.env.PORT || 988;
const server =app.listen(port,() =>{
    console.log("Connecred to the port "+port)
})
app.use((req,res,next) => {
    next(createError(404));
});
app.use(function(err,req,res,next) {
    console.log(err.message);
    if(!err.statusCode) err.statusCode =500;
    res.status(err.statusCode).send(err.message);
});
