import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticate } from './middlewares/unsureAuthenticate';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ListSenderCompliments } from './controllers/ListSenderComplimentsController';
import { ListReceiverComplimentsController } from './controllers/ListReceiverComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';

export const router = Router();

router.get('/', ensureAuthenticate, ensureAdmin, (_, response) => {
  response.json({ message: 'Collaboration Application' });
});

router.post('/users', new CreateUserController().handle);
router.post(
  '/tags',
  ensureAuthenticate,
  ensureAdmin,
  new CreateTagController().handle
);
router.post(
  '/compliments',
  ensureAuthenticate,
  ensureAdmin,
  new CreateComplimentController().handle
);
router.post('/singin', new AuthenticateUserController().handle);
router.get(
  '/user/sender/compliments',
  ensureAuthenticate,
  new ListSenderCompliments().handle
);
router.get(
  '/user/receiver/compliments',
  ensureAuthenticate,
  new ListReceiverComplimentsController().handle
);
router.get('/tags', ensureAuthenticate, new ListTagsController().handle);
