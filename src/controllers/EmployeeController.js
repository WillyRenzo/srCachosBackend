import { EmployeeService } from '../services/index.js';

class EmployeeController {

    async getEmployees(req, res) {
        try {
            const response = await EmployeeService.getAllEmployees();
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async createEmployee(req, res) {
        try {
            const body = req.body;

            const response = await EmployeeService.createAEmployee(body);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async updateEmployee(req, res) {
        try {
            const id = req.params.id;
            const body = req.body;

            const response = await EmployeeService.updateAEmployee(id, body);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async deleteEmployee(req, res) {
        try {
            const id = req.params.id;

            const response = await EmployeeService.deleteAEmployee(id);
            return res.status(201).json(response);

        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async getEmployeeById(req, res) {
        try {
            const id = req.params.id;

            const response = await EmployeeService.getEmployeeById(id);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
}

export default new EmployeeController();