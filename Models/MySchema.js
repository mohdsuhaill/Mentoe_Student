import mongoose from "mongoose";

const createMentor = mongoose.Schema({
    mentorName:String,
    mentorEmail:{type:String,required:true,unique:true},
    students:[{type:mongoose.Schema.Types.ObjectId,ref:'Student'}]
})

export const Mentor = mongoose.model("Mentor",createMentor);

const createStudent = mongoose.Schema({
    studentName:String,
    studentEmail:{type:String,required:true,unique:true},
    mentor:[{type:mongoose.Schema.Types.ObjectId,ref:'Mentor'}],
    previousMentor:[{type:mongoose.Schema.Types.ObjectId,ref:'Mentor'}]
})

export const Student = mongoose.model("Student",createStudent);