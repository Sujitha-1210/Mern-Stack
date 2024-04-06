//es7 logic
import express from 'express';
import mongoose from 'mongoose';
import signupRouter from './routes/SignupService.js';
import loginRouter from './routes/loginService.js';
import cors from 'cors';
const app = express();

//middleware logic
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//database logic
mongoose.connect("mongodb://127.0.0.1:27017/dietapp")
.then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err);
})

//router logic
app.use("/signup",signupRouter);
app.use("/login",loginRouter);
//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000!!!");
})