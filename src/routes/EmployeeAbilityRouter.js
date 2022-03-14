import express from 'express';

import { EmployeeAbilityController } from '../controllers/index.js'

const routerEmployeeAbility = express.Router();

routerEmployeeAbility.get('/',  (req, res) => { EmployeeAbilityController.getEmployeesAbilities(req, res)});

routerEmployeeAbility.post('/', (req, res) => { EmployeeController.createEmployee(req, res)});

routerEmployeeAbility.put('/:id', (req, res) => { EmployeeController.updateEmployee(req, res)});

routerEmployeeAbility.delete('/:id', (req, res) => { EmployeeController.deleteEmployee(req, res) });

routerEmployeeAbility.get('/:id', (req, res) => { EmployeeController.getEmployeeById(req, res) });

export default routerEmployeeAbility;