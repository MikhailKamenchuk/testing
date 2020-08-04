import { getItem, setItem} from './storage.js';
import {renderTasks} from './renderTasks.js';

export const onStatusTodoChange = event => {
    const isCheckbox = event.target.classList.contains('list__item-checkbox');
    
    if (!isCheckbox) {
        return;
    };
    const tasksList = getItem('tasksList');
    const currentTaskIdex = tasksList.findIndex(item => item.id === event.target.closest('.list__item').dataset.id);
    const currentTask = tasksList[currentTaskIdex];
    
    if(!currentTask.done) {
        currentTask.done = true;
        currentTask.finishedDay = new Date().getTime()
    } else {
        currentTask.done = false;
        currentTask.finishedDay = null;
    };

    const newTaskList = [...tasksList];
    newTaskList[currentTaskIdex] = currentTask;
    
    setItem('tasksList', newTaskList);
        
    renderTasks();
};
const listElem = document.querySelector('.list');
listElem.addEventListener('click', onStatusTodoChange);