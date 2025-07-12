import { Request, Response, NextFunction } from 'express';
import { useLogger } from '../config/plugins/logger';

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  useLogger(`Error: ${err.message}`, 'error');
  res.status(500).json({ message: err.message });
}
