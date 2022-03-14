import { FuncionarioHabilidade } from '../database/models/index.js';
import { v4 as uuid } from 'uuid';

class EmployeeAbilityRepository {

    async getAllEmployees(params) {
        let Employees = await FuncionarioHabilidade.findAll();

        return Employees;
    }

}

export default new EmployeeAbilityRepository();