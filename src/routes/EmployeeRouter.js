import express from 'express';

import { EmployeeController } from '../controllers/index.js'

const routerEmployee = express.Router();

routerEmployee.get('/',  (req, res) => { EmployeeController.getEmployees(req, res)});

routerEmployee.post('/', (req, res) => { EmployeeController.createEmployee(req, res)});

routerEmployee.put('/:id', (req, res) => { EmployeeController.updateEmployee(req, res)});

routerEmployee.delete('/:id', (req, res) => { EmployeeController.deleteEmployee(req, res) });

routerEmployee.get('/:id', (req, res) => { EmployeeController.getEmployeeById(req, res) });

export default routerEmployee;