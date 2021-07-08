import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { TagsRepositories } from '../repositories/TagsRepositories';

interface IComplimentsRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

export class CreateComplimentsService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentsRequest) {
    if (user_sender === user_receiver) {
      throw new Error('A user cannot send you a compliment for himself.');
    }

    const usersRepositories = getCustomRepository(UsersRepositories);
    const userReceiverExists = await usersRepositories.findOne(user_receiver);
    if (!userReceiverExists) {
      throw new Error('User Receiver does not exists.');
    }

    const tagRepositories = getCustomRepository(TagsRepositories);
    if (!(await tagRepositories.findOne(tag_id))) {
      throw new Error('Id Tag does not exists, please see our tag list');
    }

    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );
    const compliment = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    return await complimentsRepositories.save(compliment);
  }
}
