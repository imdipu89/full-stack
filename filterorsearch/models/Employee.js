var mongoose=require("mongoose");

var EmployeeSchema=new mongoose.Schema({
    name:String,
    department:String,
});
module.exports=mongoose.model("Employee",EmployeeSchema);
/*employeeRoute.route('/searchresult').post((req,res) =>{
    Employee.find({}).exec(function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log({"msg":"welcome to search field"});
        }
    });
}); */