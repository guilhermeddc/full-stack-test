import { Router } from 'express';

import UserController from '../../app/controllers/UserController';

import auth from '../../app/middlewares/auth';
import validator from '../../app/validators/userValidator';

const routes = new Router();

routes.post('/', validator.store, UserController.store);
routes.get('/', auth, UserController.show);

routes.put('/', auth, validator.update, UserController.update);

export default routes;
