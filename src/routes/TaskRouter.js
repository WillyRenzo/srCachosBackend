import express from 'express';

import { TaskController } from '../controllers/index.js'

const routerTask = express.Router();

routerTask.get('/',  (req, res) => { TaskController.getTasks(req, res)});

routerTask.post('/', (req, res) => { TaskController.createTask(req, res)});

routerTask.put('/:id', (req, res) => { TaskController.updateTask(req, res)});

routerTask.delete('/:id', (req, res) => { TaskController.deleteTask(req, res) });

routerTask.get('/:id', (req, res) => { TaskController.getTaskById(req, res) });

export default routerTask;