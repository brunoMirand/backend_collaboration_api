import { Request, Response, NextFunction } from 'express';

export function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { admin } = request.user_data;
  if (!admin || admin !== true) {
    return response.status(401).json({
      message: 'User does not have permission to perform action.',
      status: 401,
    });
  }

  return next();
}
