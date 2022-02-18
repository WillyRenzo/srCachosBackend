import { Cliente } from '../database/models/index.js';
import { v4 as uuid } from 'uuid';

class ClientRepository {

    async getAllClients(params) {
        let Clients = await Cliente.findAll();

        return Clients;
    }

    async createAClient(Client) {
        const id = uuid();

        let newClient = {
            id: id,
            ...Client
        }
        
        const response = await Cliente.create(newClient);

        return response;
    }

    async updateClient(ClientId, Client) {
        let newClient = {
            id: ClientId,
            ...Client
        };

        const response = await Cliente.update(newClient, {
            where: { 
                id: ClientId
            }
        })

        if(response) {
            return true;
        }else {
            return false;
        }
    }

    async deleteClient(ClientId) {
        const response = await Cliente.destroy({
            where: {
                id: ClientId
            }
        })

        console.log(response);
        if(response) {
            return true;
        }else {
            return false;
        }
    }

    async checkIfExists(ClientId) {
        const response = await Cliente.findByPk(ClientId);

        if(response) {
            return true;
        }else{
            return false;
        }
    }

    async getClientById(ClientId) {
        const response = await Cliente.findByPk(ClientId);

        if(response) {
            return response.dataValues;
        }else{
            return false;
        }
    }

}

export default new ClientRepository();