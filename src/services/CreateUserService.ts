import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { hash } from 'bcryptjs';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    if (!email) {
      throw new Error('Email incorrect');
    }

    const usersRepository = getCustomRepository(UsersRepositories);
    const userAlreadyExists = await usersRepository.findOne({ email });
    if (userAlreadyExists) {
      throw new Error(`User ${email} already exists`);
    }

    const encryptedPassword = await hash(password, 8);
    const user = usersRepository.create({
      name,
      email,
      admin,
      password: encryptedPassword,
    });

    return await usersRepository.save(user);
  }
}
