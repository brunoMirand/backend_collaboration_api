import { Request, Response } from 'express';
import { ListSenderComplimentsService } from '../services/ListSenderComplimentsService';

export class ListSenderCompliments {
  async handle(request: Request, response: Response) {
    const {
      user_data: { id },
    } = request;
    const compliments = await new ListSenderComplimentsService().execute(id);

    return response.status(200).json(compliments);
  }
}
