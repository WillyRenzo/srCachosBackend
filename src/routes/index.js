import express from 'express';

import routerProduct from './ProductRouter.js';
import routerClient from './ClientRouter.js'
import routerEmployee from './EmployeeRouter.js';

const router = express.Router();

router.use('/produtos', routerProduct);

router.use('/clientes', routerClient);

router.use('/funcionarios', routerEmployee);

export { router };