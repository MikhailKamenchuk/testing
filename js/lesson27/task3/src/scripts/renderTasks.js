import { getItem } from './storage.js';

export const renderTasks = () => {
    const listElem = document.querySelector('.list');
    const tasks = getItem('tasksList') || [];
    const todoListItems = tasks
        .sort((a, b) => {
            if (a.done - b.done !== 0) {
                return a.done - b.done;
            } 
            if(a.done === true) {
                return b.finishedDay - a.finishedDay;
            };
            
            return b.createDate - a.createDate;
        })
        .map(({ id, text, done }) => {
            const newTaskItem = document.createElement('li');
            newTaskItem.classList.add(`list__item`);
            newTaskItem.dataset.id = id;
            if (done) {
                newTaskItem.classList.add('list__item_done');
            }
            
            const newCheckboxItem = document.createElement('input');
            newCheckboxItem.classList.add('list__item-checkbox');
            newCheckboxItem.setAttribute('type', 'checkbox');
            newCheckboxItem.checked = done;
            
            newTaskItem.append(newCheckboxItem, text); 
            return newTaskItem;
        });

        listElem.innerHTML = '';
        listElem.append(...todoListItems);
}
renderTasks();