import { Servico } from '../database/models/index.js';
import { v4 as uuid } from 'uuid';

class TaskRepository {

    async getAllTasks(params) {
        let Tasks = await Servico.findAll();

        return Tasks;
    }

    async createATask(Task) {
        const id = uuid();

        let newTask = {
            id: id,
            ...Task
        }
        
        const response = await Servico.create(newTask);

        return response;
    }

    async updateTask(TaskId, Task) {
        let newTask = {
            id: TaskId,
            ...Task
        };

        const response = await Servico.update(newTask, {
            where: { 
                id: TaskId
            }
        })

        if(response) {
            return true;
        }else {
            return false;
        }
    }

    async deleteTask(TaskId) {
        const response = await Servico.destroy({
            where: {
                id: TaskId
            }
        })

        console.log(response);
        if(response) {
            return true;
        }else {
            return false;
        }
    }

    async checkIfExists(TaskId) {
        const response = await Servico.findByPk(TaskId);

        if(response) {
            return true;
        }else{
            return false;
        }
    }

    async getTaskById(TaskId) {
        const response = await Servico.findByPk(TaskId);

        if(response) {
            return response.dataValues;
        }else{
            return false;
        }
    }

}

export default new TaskRepository();