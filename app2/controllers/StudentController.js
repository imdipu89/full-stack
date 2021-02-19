var mongoose=require("mongoose");
var Student=require('../models/Student');
var studentController ={};
 //show list
 studentController.list = function(req, res) {
    Student.find({}).exec(function (err, students) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/students/index", {students: students});
      }
    });
  };
  
 //show student
 studentController.show = function(req, res) {
    Student.findOne({_id: req.params.id}).exec(function (err, student) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/students/show", {student:student});
      }
    });
  };
  //create new student
  studentController.create=function(req,res){
      res.render('../views/students/create');
  };
  //save  student
  studentController.save = function(req, res) {
    var student = new Student(req.body);
  
    student.save(function(err) {
      if(err) {
        console.log(err);
        res.render("../views/students/create");
      } else {
        console.log("Successfully created an student.");
        res.redirect("/students/show/"+student._id);
      }
    });
  };
  //edit student
  studentController.edit = function(req, res) {
    Student.findOne({_id: req.params.id}).exec(function (err, student) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/students/edit", {student: student});
      }
    });
  };
  
  //update student
  studentController.update = function(req, res) {
    Student.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, standard: req.body.standard, email: req.body.email, address: req.body.address,phoneno: req.body.phoneno }}, 
        { new: true }, function (err, student) {
      if (err) {
        console.log(err);
        res.render("../views/students/edit", {student: req.body});
      }
      res.redirect("/students/show/"+student._id);
    });
  };
//delete student
studentController.delete=function(req,res){
    Student.remove({_id:req.params.id},function(err){
        if(err){
            console.log(err);
        }else{
            console.log("student delected");
            res.redirect("/students");
        }
    });
};
module.exports=studentController;
