import { ProdutoRepository } from '../repositories/index.js';

class ProdutoService {
    
    async getAllProducts (req) {
        const result = await ProdutoRepository.getAllProducts();

        return result;
    }

    async createAProduct (product) {
        const result = await ProdutoRepository.createAProduct(product);

        return result;
    }

    async updateAProduct (productId, product) {
        const result = await ProdutoRepository.checkIfExists(productId);

        if(result) {
            const result2 = await ProdutoRepository.updateProduct(productId, product);

            if (result2) {
                return { message: 'Product updated successfully'};
            } else {
                return { message: 'Product was not updated.' };
            }
        } else {

            return { message: 'Product not found' };
        }
    }

    async deleteAProduct (productId) {
        const result = await ProdutoRepository.checkIfExists(productId);

        if(result) {
            const result2 = await ProdutoRepository.deleteProduct(productId);

            if (result2) {
                return { message: 'Product deleted successfully'};
            } else {
                return { message: 'Product was not deleted.' };
            }
        } else {

            return { message: 'Product not found' };
        }
    }

    async getProductById (productId) {
        const result = await ProdutoRepository.getProductById(productId);

        if(result) {
            return result;
        } else{
            return { message: 'Product not found' };
        }
    }
}

export default new ProdutoService();
