import express from 'express';

import { ClientController } from '../controllers/index.js'

const routerClient = express.Router();

routerClient.get('/',  (req, res) => { ClientController.getClients(req, res)});

routerClient.post('/', (req, res) => { ClientController.createClient(req, res)});

routerClient.put('/:id', (req, res) => { ClientController.updateClient(req, res)});

routerClient.delete('/:id', (req, res) => { ClientController.deleteClient(req, res) });

routerClient.get('/:id', (req, res) => { ClientController.getClientById(req, res) });

export default routerClient;