import { TaskRepository } from '../repositories/index.js';

class TaskService {
    
    async getAllTasks (req) {
        const result = await TaskRepository.getAllTasks();

        return result;
    }

    async createATask (Task) {
        const result = await TaskRepository.createATask(Task);

        return result;
    }

    async updateATask (TaskId, Task) {
        const result = await TaskRepository.checkIfExists(TaskId);

        if(result) {
            const result2 = await TaskRepository.updateTask(TaskId, Task);

            if (result2) {
                return { message: 'Task updated successfully'};
            } else {
                return { message: 'Task was not updated.' };
            }
        } else {

            return { message: 'Task not found' };
        }
    }

    async deleteATask (TaskId) {
        const result = await TaskRepository.checkIfExists(TaskId);

        if(result) {
            const result2 = await TaskRepository.deleteTask(TaskId);

            if (result2) {
                return { message: 'Task deleted successfully'};
            } else {
                return { message: 'Task was not deleted.' };
            }
        } else {

            return { message: 'Task not found' };
        }
    }

    async getTaskById (TaskId) {
        const result = await TaskRepository.getTaskById(TaskId);

        if(result) {
            return result;
        } else{
            return { message: 'Task not found' };
        }
    }
}

export default new TaskService();