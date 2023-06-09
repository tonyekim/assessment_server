import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from "./routes/users.js";


const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);



mongoose.set('strictQuery', true);
mongoose.connect(
  "mongodb+srv://tonyekim:otoly1992@assessment.atdpcmx.mongodb.net/?retryWrites=true&w=majority",
  
);


app.listen(3001, () => console.log("Server started"));