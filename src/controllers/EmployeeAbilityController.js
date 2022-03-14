import { EmployeeAbilityService } from '../services/index.js';

class EmployeeAbilityController {

    async getEmployeesAbilities(req, res) {
        try {
            const response = await EmployeeAbilityService.getAllEmployeesAbilities();
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
}

export default new EmployeeAbilityController();