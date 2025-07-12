import express from "express";
import healthRoute from "./../routes/health.route";
import errorHandler from "./../middlewares/error-handler.middleware";
import { loggerMiddleware } from "../middlewares/logger.middleware";

const app = express();
app.use(loggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.use("/health", healthRoute);

// Error handling middleware
app.use(errorHandler);

export default app;