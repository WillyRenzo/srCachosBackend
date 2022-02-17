import { Produto } from '../database/models/index.js';
import { v4 as uuid } from 'uuid';

class ProdutoRepository {

    async getAllProducts(params) {
        let products = await Produto.findAll();

        return products;
    }

    async createAProduct(product) {
        const id = uuid();

        let newProduct = {
            id: id,
            ...product
        }
        
        const response = await Produto.create(newProduct);

        return response;
    }

    async updateProduct(productId, product) {
        let newProduct = {
            id: productId,
            ...product
        };

        const response = await Produto.update(newProduct, {
            where: { 
                id: productId
            }
        })

        if(response) {
            return true;
        }else {
            return false;
        }
    }

    async deleteProduct(productId) {
        const response = await Produto.destroy({
            where: {
                id: productId
            }
        })

        console.log(response);
        if(response) {
            return true;
        }else {
            return false;
        }
    }

    async checkIfExists(productId) {
        const response = await Produto.findByPk(productId);

        if(response) {
            return true;
        }else{
            return false;
        }
    }

    async getProductById(productId) {
        const response = await Produto.findByPk(productId);

        if(response) {
            return response.dataValues;
        }else{
            return false;
        }
    }

}

export default new ProdutoRepository();
    
