import express from 'express';

import { ClientController } from '../controllers/index.js'

const routerEmployee = express.Router();

routerEmployee.get('/',  (req, res) => { ClientController.getClients(req, res)});

routerEmployee.post('/', (req, res) => { ClientController.createClient(req, res)});

routerEmployee.put('/:id', (req, res) => { ClientController.updateClient(req, res)});

routerEmployee.delete('/:id', (req, res) => { ClientController.deleteClient(req, res) });

routerEmployee.get('/:id', (req, res) => { ClientController.getClientById(req, res) });

export default routerEmployee;