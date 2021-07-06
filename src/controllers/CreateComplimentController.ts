import { Request, Response } from 'express';
import { CreateComplimentsService } from '../services/CreateComplimentsService';

export class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const {
      user_data: { id: user_sender },
      body: { tag_id, user_receiver, message }
    } = request;

    const compliment = await (new CreateComplimentsService().execute({
      tag_id,
      user_sender,
      user_receiver,
      message
    }));

    return response.status(201).json(compliment);
  }
}
