import { EmployeeAbilityRepository } from '../repositories/index.js';

class EmployeeAbilityService {
    
    async getAllEmployeesAbilities (req) {
        const result = await EmployeeAbilityRepository.getAllEmployees();

        return result;
    }

}

export default new EmployeeAbilityService();