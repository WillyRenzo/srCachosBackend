import { ProductRepository } from '../repositories/index.js';

class ProductService {
    
    async getAllProducts (req) {
        const result = await ProductRepository.getAllProducts();

        return result;
    }

    async createAProduct (product) {
        const result = await ProductRepository.createAProduct(product);

        return result;
    }

    async updateAProduct (productId, product) {
        const result = await ProductRepository.checkIfExists(productId);

        if(result) {
            const result2 = await ProductRepository.updateProduct(productId, product);

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
        const result = await ProductRepository.checkIfExists(productId);

        if(result) {
            const result2 = await ProductRepository.deleteProduct(productId);

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
        const result = await ProductRepository.getProductById(productId);

        if(result) {
            return result;
        } else{
            return { message: 'Product not found' };
        }
    }
}

export default new ProductService();
