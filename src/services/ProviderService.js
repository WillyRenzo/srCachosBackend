import { ProviderRepository } from '../repositories/index.js';

class ProviderService {
    
    async getAllProviders (req) {
        const result = await ProviderRepository.getAllProviders();

        return result;
    }

    async createAProvider (Provider) {
        const result = await ProviderRepository.createAProvider(Provider);

        return result;
    }

    async updateAProvider (ProviderId, Provider) {
        const result = await ProviderRepository.checkIfExists(ProviderId);

        if(result) {
            const result2 = await ProviderRepository.updateProvider(ProviderId, Provider);

            if (result2) {
                return { message: 'Provider updated successfully'};
            } else {
                return { message: 'Provider was not updated.' };
            }
        } else {

            return { message: 'Provider not found' };
        }
    }

    async deleteAProvider (ProviderId) {
        const result = await ProviderRepository.checkIfExists(ProviderId);

        if(result) {
            const result2 = await ProviderRepository.deleteProvider(ProviderId);

            if (result2) {
                return { message: 'Provider deleted successfully'};
            } else {
                return { message: 'Provider was not deleted.' };
            }
        } else {

            return { message: 'Provider not found' };
        }
    }

    async getProviderById (ProviderId) {
        const result = await ProviderRepository.getProviderById(ProviderId);

        if(result) {
            return result;
        } else{
            return { message: 'Provider not found' };
        }
    }
}

export default new ProviderService();