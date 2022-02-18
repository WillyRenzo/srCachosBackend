import { ClientService } from '../services/index.js';

class ClientController {

    async getClients(req, res) {
        try {
            const response = await ClientService.getAllClients();
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async createClient(req, res) {
        try {
            const body = req.body;

            const response = await ClientService.createAClient(body);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async updateClient(req, res) {
        try {
            const id = req.params.id;
            const body = req.body;

            const response = await ClientService.updateAClient(id, body);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async deleteClient(req, res) {
        try {
            const id = req.params.id;

            const response = await ClientService.deleteAClient(id);
            return res.status(201).json(response);

        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async getClientById(req, res) {
        try {
            const id = req.params.id;

            const response = await ClientService.getClientById(id);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
}

export default new ClientController();