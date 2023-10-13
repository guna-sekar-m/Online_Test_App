import { questions,results } from "../models/tests.model.js";
import jwt from "jsonwebtoken";

const inittest=async(req,res)=>{
    
    try{
       const checktest=await results.findOne({Student_Register_Number:req.body.Student_Register_Number.trim()}).lean();
       if(checktest){
        res.send({status:"Already test completed"});
       }
       else{
        const token=jwt.sign(req.body, "OnlineSecretKey")
        res.send({status:"Init Test",token:token});
       }
    }
    catch(err){
      console.log(err);
      res.send(err);
    }
}
const getquestions=async(req,res)=>{
    
    try{
      const findquestions = await questions.aggregate([
        { $sample: { size: 45 } }, // Retrieve 45 random questions
        {
            $project: {
                question: 1,
                option1: 1,
                option2: 1,
                option3: 1,
                option4: 1,
                _id: 0 // Exclude the _id field if present
            }
        }
    ]);
       res.send(findquestions);
     
    }
    catch(err){
      console.log(err);
      res.send(err);
    }
}
const savetest=async(req,res)=>{
    
  try{
      var  resresult=await new results(req.body).save();
      var allquestions=await questions.find({});
      var correctAnswerCount = 0;
      for (var i = 0; i < resresult.Results.length; i++) {
        var result = resresult.Results[i];

        for (var key in result) {
          if (result.hasOwnProperty(key)) {
            var question = allquestions.find(function (q) {
              return q.question === result[key][0].Question;
            });

            if (question && result[key][0].Selected_Answer === question.correctAnswer) {
              correctAnswerCount++;
            }
          }
        }
      }
      var response=await results.findOneAndUpdate({_id:resresult._id},{CorrectAnswerCount:correctAnswerCount,WrongAnswerCount:allquestions.length-correctAnswerCount},{returnOriginal:false});
      res.send({data:response,status:"Test completed"});
   
  }
  catch(err){
    console.log(err);
    res.send(err);
  }
}
const gettestresults=async(req,res)=>{
    
  try{
     
      var allquestions=await results.find({},{_id:0,Results:0,createdAt:0,updatedAt:0,__v:0});
   
      res.send(allquestions);
   
  }
  catch(err){
    console.log(err);
    res.send(err);
  }
}
export {inittest,getquestions,savetest,gettestresults}