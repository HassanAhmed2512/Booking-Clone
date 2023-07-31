import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js"
import hotelsRouter from "./routes/hotels.js"
import roomsRouter from "./routes/rooms.js"
import usersRouter from "./routes/users.js"
import cors from "cors";
  

// Confing Part
const app = express();
app.use(cors())
app.use(express.json()) ; // to convert req and res in json
app.use(cookieParser()) ; // to set cookie in the broswer 
dotenv.config();

//Connection DB
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("DataBase Coneected")
      } catch (error) {
        console.log(error)
        throw error
      }
}

    // mongoose.connection.on("disconnected",()=>{
    //     console.log("DataBase is Not Coneected")
    // })

    // mongoose.connection.on("connected",()=>{
    //     console.log("DataBase Coneected Now")
    // })

    app.get("/",(req,res)=>{
        res.send("Hello")
    })

// Listen Port
app.listen(8800,()=>{
    connect()
    console.log("Connected to backend !")
})

//middlewares
app.use("/api/auth",authRouter)
app.use("/api/hotels",hotelsRouter)
app.use("/api/rooms",roomsRouter)
app.use("/api/users",usersRouter)


// Handle errors 
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });