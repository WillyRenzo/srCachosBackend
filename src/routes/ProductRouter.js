import express from 'express';
import { ProductController } from '../controllers/index.js';

const routerProduct = express.Router();

routerProduct.get('/',  (req, res) => { ProductController.getProducts(req, res)});

routerProduct.post('/', (req, res) => { ProductController.createProduct(req, res)});

routerProduct.put('/:id', (req, res) => { ProductController.updateProduct(req, res)});

routerProduct.delete('/:id', (req, res) => { ProductController.deleteProduct(req, res) });

routerProduct.get('/:id', (req, res) => { ProductController.getProductById(req, res) });

export default routerProduct;