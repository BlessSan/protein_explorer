import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./logger";

dotenv.config();

type MongooseError = Error & {
  code?: number;
};

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      logger.error("MongoDB URI not found in environment variables");
      process.exit(1); // Exit with error
    }

    logger.info("Attempting to connect to MongoDB...");
    await mongoose.connect(mongoURI);
    logger.info("MongoDB connected successfully");
  } catch (error) {
    const mongoError = error as MongooseError;
    logger.error("MongoDB connection error:", {
      message: mongoError.message,
      code: mongoError.code,
      stack: mongoError.stack,
    });
    process.exit(1);
  }
};

export default connectDB;
