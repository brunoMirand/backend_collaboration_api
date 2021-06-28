import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';

export const router = Router();

router.get('/', ensureAdmin, (_, response) => {
  response.json({'message': 'Collaboration Application'});
});

router.post('/users', (new CreateUserController).handle);
router.post('/tags', ensureAdmin, (new CreateTagController).handle);
