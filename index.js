import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './Database/Config.js'
import router from "./Routers/MentorStudent.js";

dotenv.config()
const app = express();
app.use(cors())
app.use(express.json())

connectDB();

const port = 4000

app.use('/api',router)

app.get('/',(req,res)=>{
    res.status(200).send("Running Successfully",port)
})

app.listen(process.env.PORT,()=>{
    console.log("App is running in the port",process.env.PORT);
})