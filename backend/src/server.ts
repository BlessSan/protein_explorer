import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app: Express = express();
const PORT: number = parseInt(process.env.PORT || "5000", 10);

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API is running deploy test v1...");
});

// Basic route for testing
app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "API is working!" });
});

// Define error handling middleware
interface ErrorResponse extends Error {
  statusCode?: number;
}

// Global error handler - will be utilized when routes are implemented
// This catches errors passed via next(error) in route handlers
app.use(
  (err: ErrorResponse, req: Request, res: Response, _next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      error: err.message || "Server Error",
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error) => {
  console.error("Unhandled Promise Rejection:", err.message);
  // Close server & exit process
  process.exit(1);
});

export default app;
