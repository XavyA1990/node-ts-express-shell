import express from "express";
import healthRoute from "./../routes/health.route";
import { loggerMiddleware } from "../middlewares/logger.middleware";

const app = express();
app.use(loggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.use("/health", healthRoute);

export default app;