import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { Users } from '../entities/Users';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);
    const user = await usersRepository.findOne({
      email,
    });

    if (!user) {
      throw new Error('Invalid fields: Email/Password');
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid fields: Email/Password');
    }

    return this.generateAuthenticationToken(user);
  }

  private generateAuthenticationToken(user: Users): string {
    return sign(
      {
        email: user.email,
        admin: user.admin,
      },
      process.env.SECRET_TOKEN,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );
  }
}
