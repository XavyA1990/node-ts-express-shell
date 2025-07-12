import { Request, Response } from "express";

export const checkHealth = (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "Server is healthy",
    timestamp: new Date().toISOString(),
  });
};
