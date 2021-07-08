import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const token = await new AuthenticateUserService().execute({
      email,
      password,
    });

    return response.status(200).json({ token: token });
  }
}
