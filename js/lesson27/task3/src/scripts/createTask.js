import { setItem, getItem } from "./storage.js";
import { renderTasks } from './renderTasks.js'

export const onCreateTask = () => {
    const inputTodoCreator = document.querySelector('.task-input');
    
    if (inputTodoCreator.value === '') {
        return;
    };
    const tasksList = getItem('tasksList') || [];
    
    const newTaskList = [
        {
            id: Math.random().toString().slice(2),
            text: inputTodoCreator.value,
            done: false,
            createDate: new Date(),
            finishedDay: null,
        }, 
        ...tasksList,
    ];

    setItem('tasksList', newTaskList);
    inputTodoCreator.value = '';
    renderTasks();
}

const createTodoBtn = document.querySelector('.create-task-btn');
createTodoBtn.addEventListener('click', onCreateTask);