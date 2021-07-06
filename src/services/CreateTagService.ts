import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';

export class CreateTagService {
  async execute(name: string) {
    if (!name) {
      throw new Error('Invalid field name');
    }

    const tagsRepository = getCustomRepository(TagsRepositories);
    const tagAlreadyExists = await tagsRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error('Tag name has exists');
    }

    const tag = tagsRepository.create({ name });

    return await tagsRepository.save(tag);
  }
}
