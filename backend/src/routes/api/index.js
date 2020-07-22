import { Router } from 'express';

import user from './user.routes';
import session from './session.routes';
import beer from './beer.routes';

const routes = new Router();

routes.use('/users', user);
routes.use('/sessions', session);
routes.use('/beers', beer);

export default routes;
