import { setItem, getItem } from './storage.js';
import { renderTasks } from './renderTasks.js';
import { onStatusTodoChange } from './changeTask.js';
import { onCreateTask } from './createTask.js';

document.addEventListener('DOMContentLoaded', () => {
    renderTasks()
});
