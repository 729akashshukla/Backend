import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({path:'./env'})

connectDB().then(() => {
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`server is running at port :${process.env.PORT}`);
        })
}).catch((err) =>{
    console.log("MONGO db connection failed !!!!",err);
})


















// import express from "express";

// const app = express()

// ( async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("ERRR:",error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`Appp is listening on port ${process.env.PORT}`);
//         })

//     } catch(error){
//         console.error("ERROR:",error)
//         throw err

//     }
// })()