import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () : Promise<void> => {

    const dbUri = process.env.MONGO_URI as string;

    if(!dbUri){
        console.error('Database url is not set');
        process.exit(1);
    }

    try{
        await mongoose.connect(dbUri);
        console.log("Database connected successfully");
    }catch(error){
        console.error('Database connection failed', error);
        process.exit(1);
    }
}

export default connectDB;