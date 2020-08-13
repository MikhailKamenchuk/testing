import { renderTasks } from './renderTasks.js';
import { createTask } from './tasksGateway.js';

export const onCreateTask = () => {
    const inputTodoCreator = document.querySelector('.task-input');

    if (inputTodoCreator.value === '') {
        return;
    };
    const newTask = {
        text: inputTodoCreator.value,
        done: false,
        createDate: new Date(),
        finishedDay: null,
    }
    createTask(newTask)
        .then(() => {
            renderTasks();
        });
    inputTodoCreator.value = '';
}

