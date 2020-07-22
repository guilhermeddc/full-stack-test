import { Router } from 'express';
import routesApi from './api';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Api is Running' }));

routes.use('/api', routesApi);

export default routes;
