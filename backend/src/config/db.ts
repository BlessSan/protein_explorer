import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

type MongooseError = Error & {
  code?: number;
};

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || "";
    if (!mongoURI) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    const mongooseError = error as MongooseError;
    console.error(`MongoDB connection error: ${mongooseError.message}`);
    process.exit(1);
  }
};

export default connectDB;
