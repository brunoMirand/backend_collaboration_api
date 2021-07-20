import { Request, Response } from 'express';
import { ListTagsService } from '../services/ListTagsService';

export class ListTagsController {
  async handle(_: Request, response: Response) {
    const tags = await new ListTagsService().execute();

    return response.status(200).json(tags);
  }
}
