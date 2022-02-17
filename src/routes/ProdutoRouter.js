import express from 'express';
import { ProdutoController } from '../controllers/index.js';

const routerProduto = express.Router();

routerProduto.get('/',  (req, res) => { ProdutoController.getProducts(req, res)});

routerProduto.post('/', (req, res) => { ProdutoController.createProduct(req, res)});

routerProduto.put('/:id', (req, res) => { ProdutoController.updateProduct(req, res)});

routerProduto.delete('/:id', (req, res) => { ProdutoController.deleteProduct(req, res) });

routerProduto.get('/:id', (req, res) => { ProdutoController.getProductById(req, res) });

export default routerProduto;