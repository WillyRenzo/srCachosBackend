import { ProductService } from "../services/index.js";

class ProductController {
  async getProducts(req, res) {
    try {
      const response = await ProductService.getAllProducts();
      return res.status(201).json(response);
    } catch (e) {
      return res.status(404).send(e);
    }
  }

  async createProduct(req, res) {
    try {
      const body = req.body;

      const response = await ProductService.createAProduct(body);
      return res.status(201).json(response);
    } catch (e) {
      return res.status(404).send(e);
    }
  }

  async updateProduct(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;

      const response = await ProductService.updateAProduct(id, body);
      return res.status(201).json(response);
    } catch (e) {
      return res.status(404).send(e);
    }
  }

  async deleteProduct(req, res) {
    try {
      const id = req.params.id;

      const response = await ProductService.deleteAProduct(id);
      return res.status(201).json(response);
    } catch (e) {
      return res.status(404).send(e);
    }
  }

  async getProductById(req, res) {
    try {
      const id = req.params.id;

      const response = await ProductService.getProductById(id);
      return res.status(201).json(response);
    } catch (e) {
      return res.status(404).send(e);
    }
  }
}

export default new ProductController();
