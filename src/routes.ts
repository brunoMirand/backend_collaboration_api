import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { CreateComplimentController } from './controllers/CreateComplimentController';

export const router = Router();

router.get('/', ensureAdmin, (_, response) => {
  response.json({ 'message': 'Collaboration Application' });
});

router.post('/users', (new CreateUserController).handle);
router.post('/tags', ensureAdmin, (new CreateTagController).handle);
router.post('/compliments', (new CreateComplimentController).handle);
router.post('/singin', (new AuthenticateUserController).handle);
