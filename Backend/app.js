import express from "express";
import dotenv from "dotenv";
import  connectDB from "./config/Db.config.js"
import userRoutes from "./routes/routes.users.js";
import logger from  "./config/logger.js"


dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api", userRoutes);

app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.url}`);
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(500).send("Internal Server Error");
});

export default app;
