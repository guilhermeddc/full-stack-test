import { Router } from 'express';

import SessionController from '../../app/controllers/SessionController';
import validator from '../../app/validators/sessionValidator';

const routes = new Router();

routes.post('/', validator.store, SessionController.store);

export default routes;
