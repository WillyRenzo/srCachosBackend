import express from 'express';

import routerProduct from './ProductRouter.js';
import routerClient from './ClientRouter.js'

const router = express.Router();

router.use('/produtos', routerProduct);

router.use('/clientes', routerClient);

export { router };