const tasks = [
    { id: Math.random().toString().slice(2), text: 'Buy milk', done: false },
    { id: Math.random().toString().slice(2), text: 'Pick up Tom from airport', done: false },
    { id: Math.random().toString().slice(2), text: 'Visit party', done: false },
    { id: Math.random().toString().slice(2), text: 'Visit doctor', done: true },
    { id: Math.random().toString().slice(2), text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = () => {
    const todoListItems = tasks
        .sort((a, b) => a.done - b.done)
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

const onStatusTodoChange = event => {
    const isCheckbox = event.target.classList.contains('list__item-checkbox');
    
    if (!isCheckbox) {
        return;
    };
    
    const currentTask = tasks.find(item => item.id === event.target.closest('.list__item').dataset.id);
    currentTask.done = !currentTask.done;
    
    renderTasks();
};

listElem.addEventListener('click', onStatusTodoChange);

const inputTodoCreator = document.querySelector('.task-input');
const createTodoBtn = document.querySelector('.create-task-btn');

const onCreateTask = () => {
    if (inputTodoCreator.value === '') {
        return;
    };
    tasks.push({
        id: Math.random().toString().slice(2),
        text: inputTodoCreator.value,
        done: false
    });
    inputTodoCreator.value = '';
    renderTasks();
}

createTodoBtn.addEventListener('click', onCreateTask);
