import { ClientRepository } from '../repositories/index.js';

class ClientService {
    
    async getAllClients (req) {
        const result = await ClientRepository.getAllClients();

        return result;
    }

    async createAClient (Client) {
        const result = await ClientRepository.createAClient(Client);

        return result;
    }

    async updateAClient (ClientId, Client) {
        const result = await ClientRepository.checkIfExists(ClientId);

        if(result) {
            const result2 = await ClientRepository.updateClient(ClientId, Client);

            if (result2) {
                return { message: 'Client updated successfully'};
            } else {
                return { message: 'Client was not updated.' };
            }
        } else {

            return { message: 'Client not found' };
        }
    }

    async deleteAClient (ClientId) {
        const result = await ClientRepository.checkIfExists(ClientId);

        if(result) {
            const result2 = await ClientRepository.deleteClient(ClientId);

            if (result2) {
                return { message: 'Client deleted successfully'};
            } else {
                return { message: 'Client was not deleted.' };
            }
        } else {

            return { message: 'Client not found' };
        }
    }

    async getClientById (ClientId) {
        const result = await ClientRepository.getClientById(ClientId);

        if(result) {
            return result;
        } else{
            return { message: 'Client not found' };
        }
    }
}

export default new ClientService();