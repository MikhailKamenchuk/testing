import { getTasksList } from './tasksGateway.js';

export const createTasksItem = data => {
    const { id, text, done } = data;

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

    const textElem = document.createElement('span');
    textElem.classList.add('list__item__text');
    textElem.textContent = text;

    const deleteBtnElem = document.createElement('button');
    deleteBtnElem.classList.add('list__item__delete-btn');

    newTaskItem.append(newCheckboxItem, textElem, deleteBtnElem);
    return newTaskItem;
}

export const createTaskList = data => data
    .sort((a, b) => {
        if (a.done - b.done !== 0) {
            return a.done - b.done;
        }
        if (a.done === true) {
            return b.finishedDay - a.finishedDay;
        };

        return new Date(b.createDate) - new Date(a.createDate);
    })
    .map(task => createTasksItem(task));


export const renderTasks = () => {
    const listElem = document.querySelector('.list');
    getTasksList()
        .then(data => {
            const todoListItems = createTaskList(data);
            listElem.innerHTML = '';
            listElem.append(...todoListItems);
        });

}
