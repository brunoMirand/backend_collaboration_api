import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes';

import "./database";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 5005;

app.use(express.json());
app.use(router);
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return response.status(400).json({
      'status': 400,
      'message': error.message,
    });
  }

  return response.status(500).json({
    'status': 500,
    'message': 'Internal Server Error',
  });
})

app.listen(port, () => console.log(`The application is running and is available on the port ${port}`));
