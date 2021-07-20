import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  error: Error,
  _: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof Error) {
    return response.status(400).json({
      status: 400,
      message: error.message,
      extras: {
        level: error.name,
        stack: error.stack,
      },
    });
  }

  return response.status(500).json({
    status: 500,
    message: 'Internal Server Error',
    extras: {
      level: 'Error',
    },
  });
}
