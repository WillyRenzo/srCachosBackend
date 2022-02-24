import { ProviderService } from "../services/index.js";

class ProviderController {
  async getProviders(req, res) {
    try {
      const response = await ProviderService.getAllProviders();
      return res.status(201).json(response);
    } catch (e) {
      return res.status(404).send(e);
    }
  }

  async createProvider(req, res) {
    try {
      const body = req.body;

      const response = await ProviderService.createAProvider(body);
      return res.status(201).json(response);
    } catch (e) {
      return res.status(404).send(e);
    }
  }

  async updateProvider(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;

      const response = await ProviderService.updateAProvider(id, body);
      return res.status(201).json(response);
    } catch (e) {
      return res.status(404).send(e);
    }
  }

  async deleteProvider(req, res) {
    try {
      const id = req.params.id;

      const response = await ProviderService.deleteAProvider(id);
      return res.status(201).json(response);
    } catch (e) {
      return res.status(404).send(e);
    }
  }

  async getProviderById(req, res) {
    try {
      const id = req.params.id;

      const response = await ProviderService.getProviderById(id);
      return res.status(201).json(response);
    } catch (e) {
      return res.status(404).send(e);
    }
  }
}

export default new ProviderController();
