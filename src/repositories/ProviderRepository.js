import { Fornecedor } from '../database/models/index.js';
import { v4 as uuid } from 'uuid';

class ProviderRepository {

    async getAllProviders(params) {
        let Providers = await Fornecedor.findAll();

        return Providers;
    }

    async createAProvider(Provider) {
        const id = uuid();

        let newProvider = {
            id: id,
            ...Provider
        }
        
        const response = await Fornecedor.create(newProvider);

        return response;
    }

    async updateProvider(ProviderId, Provider) {
        let newProvider = {
            id: ProviderId,
            ...Provider
        };

        const response = await Fornecedor.update(newProvider, {
            where: { 
                id: ProviderId
            }
        })

        if(response) {
            return true;
        }else {
            return false;
        }
    }

    async deleteProvider(ProviderId) {
        const response = await Fornecedor.destroy({
            where: {
                id: ProviderId
            }
        })

        console.log(response);
        if(response) {
            return true;
        }else {
            return false;
        }
    }

    async checkIfExists(ProviderId) {
        const response = await Fornecedor.findByPk(ProviderId);

        if(response) {
            return true;
        }else{
            return false;
        }
    }

    async getProviderById(ProviderId) {
        const response = await Fornecedor.findByPk(ProviderId);

        if(response) {
            return response.dataValues;
        }else{
            return false;
        }
    }

}

export default new ProviderRepository();