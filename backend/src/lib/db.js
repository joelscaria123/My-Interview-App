import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {

    try{

        if(!ENV.DB_URL) {
            throw new Error("DB_URL is not defined in the environment variables")
        }
         const conn = await mongoose.connect(ENV.DB_URL);
         console.log("MongoDB connected Successfully ✅", conn.connection.host);
    }

    catch(error){
       console.log("Error connecting to the Database ❌", error.message);
       process.exit(1);
    }
}
