import express from 'express';

import routerProduto from './ProdutoRouter.js';

const router = express.Router();

router.use('/produtos', routerProduto);

export { router };