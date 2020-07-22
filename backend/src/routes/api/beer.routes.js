import { Router } from 'express';

import PunkApiController from '../../app/controllers/PunkApiController';

import auth from '../../app/middlewares/auth';

const routes = new Router();

routes.get('/', auth, PunkApiController.index);
routes.get('/:id', auth, PunkApiController.show);

export default routes;
