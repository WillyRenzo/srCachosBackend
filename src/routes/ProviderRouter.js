import express from 'express';

import { ProviderController } from '../controllers/index.js'

const routerProvider = express.Router();

routerProvider.get('/',  (req, res) => { ProviderController.getProviders(req, res)});

routerProvider.post('/', (req, res) => { ProviderController.createProvider(req, res)});

routerProvider.put('/:id', (req, res) => { ProviderController.updateProvider(req, res)});

routerProvider.delete('/:id', (req, res) => { ProviderController.deleteProvider(req, res) });

routerProvider.get('/:id', (req, res) => { ProviderController.getProviderById(req, res) });

export default routerProvider;