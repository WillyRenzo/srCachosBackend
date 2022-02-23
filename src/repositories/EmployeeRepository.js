import { Funcionario } from '../database/models/index.js';
import { v4 as uuid } from 'uuid';

class EmployeeRepository {

    async getAllEmployees(params) {
        let Employees = await Funcionario.findAll();

        return Employees;
    }

    async createAEmployee(Employee) {
        const id = uuid();

        let newEmployee = {
            id: id,
            ...Employee
        }
        
        const response = await Funcionario.create(newEmployee);

        return response;
    }

    async updateEmployee(EmployeeId, Employee) {
        let newEmployee = {
            id: EmployeeId,
            ...Employee
        };

        const response = await Funcionario.update(newEmployee, {
            where: { 
                id: EmployeeId
            }
        })

        if(response) {
            return true;
        }else {
            return false;
        }
    }

    async deleteEmployee(EmployeeId) {
        const response = await Funcionario.destroy({
            where: {
                id: EmployeeId
            }
        })

        console.log(response);
        if(response) {
            return true;
        }else {
            return false;
        }
    }

    async checkIfExists(EmployeeId) {
        const response = await Funcionario.findByPk(EmployeeId);

        if(response) {
            return true;
        }else{
            return false;
        }
    }

    async getEmployeeById(EmployeeId) {
        const response = await Funcionario.findByPk(EmployeeId);

        if(response) {
            return response.dataValues;
        }else{
            return false;
        }
    }

}

export default new EmployeeRepository();