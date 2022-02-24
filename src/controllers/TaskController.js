import { TaskService } from '../services/index.js';

class TaskController {

    async getTasks(req, res) {
        try {
            const response = await TaskService.getAllTasks();
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async createTask(req, res) {
        try {
            const body = req.body;

            const response = await TaskService.createATask(body);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async updateTask(req, res) {
        try {
            const id = req.params.id;
            const body = req.body;

            const response = await TaskService.updateATask(id, body);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async deleteTask(req, res) {
        try {
            const id = req.params.id;

            const response = await TaskService.deleteATask(id);
            return res.status(201).json(response);

        } catch (e) {
            return res.status(404).send(e);
        }
    }
    
    async getTaskById(req, res) {
        try {
            const id = req.params.id;

            const response = await TaskService.getTaskById(id);
            return res.status(201).json(response);
        } catch (e) {
            return res.status(404).send(e);
        }
    }
}

export default new TaskController();