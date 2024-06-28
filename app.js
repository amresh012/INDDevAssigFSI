import express from "express";
import dotenv from "dotenv";
import  connectDB from "./config/Db.config.js"
import  userRoutes from "./routes/routes.users.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message });
});

export default app;
