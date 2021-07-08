import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import { errorHandler } from './middlewares/errorHandle';
import cors from 'cors';
import { router } from './routes';

import './database';
import dotenv from 'dotenv';
dotenv.config();

const port = 5005;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`The application is running and is available on the port ${port}`)
);
