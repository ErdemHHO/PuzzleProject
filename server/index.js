import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import cors from "cors";

import userRoutes from './routes/user.js'

const app=express();
dotenv.config();

// uploads klasörünü erişilebilir hale getirin
app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json({limit:"30mb"}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use(cors());

app.use('/',userRoutes);

app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT," . Port Dinleniyor");
    mongoose
    .set("strictQuery",false)
    .connect(process.env.MONGO_DB)
    .then(()=>console.log("connected to db"))
    .catch((error)=>console.log(error))
})