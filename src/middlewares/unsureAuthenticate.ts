import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

interface JsonWebTokenUserData {
  email?: string;
  admin: boolean;
}

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authenticationToken = request.headers?.authentication;
  if (!authenticationToken) {
    return response.status(401).json({
      'message': 'Unauthorized, authentication token not found.',
      'status': 401
    });
  }

  try {
    const { sub, admin } = verify(String(authenticationToken), process.env.SECRET_TOKEN) as JwtPayload & JsonWebTokenUserData;
    request.user_data = {
      id: sub,
      admin
    };

    return next();
  } catch (error) {
    return response.status(401).json({
      'message': `Unauthorized, invalid token, ${error.message}`,
      'status': 401
    });
  }
}
