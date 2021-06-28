import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IUserRequest {
  name: string,
  email: string,
  admin?: boolean
}


export class CreateUserService {
  async execute({name, email, admin} : IUserRequest) {

    if (!email) {
      throw new Error('Email incorrect');
    }

    const usersRepository = getCustomRepository(UsersRepositories);
    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new Error(`User ${email} already exists`);
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    });

    return await usersRepository.save(user);
  }
}
