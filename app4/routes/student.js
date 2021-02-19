var express=require('express');
const Student = require('../models/Student');
var router=express.Router();
var studentSearch={};
//var record=require('../controllers/RecordController');
/*router.post("/search",function(req,res)  {
    
    if(req.body){
        console.log("Body is receivec");
        res.json({"message": "Received"})
    } else {
        console.log("No data");
        res.json({"message": "No data"})
    }

})
*/
app.get('/students',function(req,res){
    Student.find().then((data) => {
        res.json(data);
    })
})
module.exports=router;

