import { renderTasks } from './renderTasks.js';
import { onCreateTask, } from './createTask.js';
import { onDeleteTodo, onStatusTodoChange } from './changeTask.js';

import '../styles/index.scss'

const listElem = document.querySelector('.list');
const createTodoBtn = document.querySelector('.create-task-btn');


document.addEventListener('DOMContentLoaded', () => {
    renderTasks()
});
createTodoBtn.addEventListener('click', onCreateTask);
listElem.addEventListener('click', onStatusTodoChange);
listElem.addEventListener('click', onDeleteTodo);