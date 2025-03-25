import { config } from "dotenv";
import mongoose from "mongoose";

config()

async function connectDB () {
    try {
        await mongoose.connect(process.env.mongoDB)
        console.log("Databasega muvaffaqiyatli ulandi");
        
    } catch (error) {
        console.log("Databasega ulanishda xatolik")
        process.exit(1)
    }
}

export default connectDB;