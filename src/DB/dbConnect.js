import mongoose from "mongoose";
import { config } from "../config/config.js";

const dbConnect=async()=>{
    try {
        await mongoose.connect(config.mongodbUri);
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log("database error");
    }

}

export default dbConnect;