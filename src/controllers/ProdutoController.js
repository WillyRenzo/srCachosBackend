import { ProdutoService } from '../services/index.js';

class ProdutoController {

    constructor() {
        
    }

    async getProducts(req, res) {
        try {
            const response = await ProdutoService.getAllProducts();
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async createProduct(req, res) {
        try {
            const body = req.body;

            const response = await ProdutoService.createAProduct(body);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async updateProduct(req, res) {
        try {
            const id = req.params.id;
            const body = req.body;

            const response = await ProdutoService.updateAProduct(id, body);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async deleteProduct(req, res) {
        try {
            const id = req.params.id;

            const response = await ProdutoService.deleteAProduct(id);
            return res.status(201).json(response);

        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async getProductById(req, res) {
        try {
            const id = req.params.id;

            const response = await ProdutoService.getProductById(id);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
}

export default new ProdutoController();