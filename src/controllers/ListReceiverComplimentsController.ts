import { Request, Response } from 'express';
import { ListReceiverComplimentsService } from '../services/ListReceiverComplimentsService';

export class ListReceiverComplimentsController {
  async handle(request: Request, response: Response) {
    const {
      user_data: { id },
    } = request;
    const compliments = await new ListReceiverComplimentsService().execute(id);

    return response.status(200).json(compliments);
  }
}
