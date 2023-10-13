import { Schema as _Schema } from 'mongoose';
import con from '../db/db.js';
const Schema = _Schema;

 const QuestionsSchema = new Schema(
    {
        question: String,
        option1: {type:String,default:""},
        option2: {type:String,default:""},
        option3: {type:String,default:""},
        option4: {type:String,default:""},
        correctAnswer: String,
    },
   { timestamps: true }
)
const ResultsSchema= new Schema(
    {
       
        Student_Register_Number: {type:String,default:""},
        Student_Name: {type:String,default:""},
        Student_Department: {type:String,default:""},
        Student_Email: {type:String,default:""},
        Student_Mobile_Number:String,
        Remaining_Time:String,
        Results:Array,
        CorrectAnswerCount:{type:String,default:"0"},
        WrongAnswerCount:{type:String,default:"0"}
       
    },
   { timestamps: true }
)
var questions=con.model("questions", QuestionsSchema);
var results=con.model("results", ResultsSchema);

export {questions,results};
