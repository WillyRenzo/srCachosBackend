import { EmployeeRepository } from '../repositories/index.js';

class EmployeeService {
    
    async getAllEmployees (req) {
        const result = await EmployeeRepository.getAllEmployees();

        return result;
    }

    async createAEmployee (Employee) {
        const result = await EmployeeRepository.createAEmployee(Employee);

        return result;
    }

    async updateAEmployee (EmployeeId, Employee) {
        const result = await EmployeeRepository.checkIfExists(EmployeeId);

        if(result) {
            const result2 = await EmployeeRepository.updateEmployee(EmployeeId, Employee);

            if (result2) {
                return { message: 'Employee updated successfully'};
            } else {
                return { message: 'Employee was not updated.' };
            }
        } else {

            return { message: 'Employee not found' };
        }
    }

    async deleteAEmployee (EmployeeId) {
        const result = await EmployeeRepository.checkIfExists(EmployeeId);

        if(result) {
            const result2 = await EmployeeRepository.deleteEmployee(EmployeeId);

            if (result2) {
                return { message: 'Employee deleted successfully'};
            } else {
                return { message: 'Employee was not deleted.' };
            }
        } else {

            return { message: 'Employee not found' };
        }
    }

    async getEmployeeById (EmployeeId) {
        const result = await EmployeeRepository.getEmployeeById(EmployeeId);

        if(result) {
            return result;
        } else{
            return { message: 'Employee not found' };
        }
    }
}

export default new EmployeeService();