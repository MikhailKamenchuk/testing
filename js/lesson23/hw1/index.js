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
        .map(({ id, text, done }) => 
        `<li class="list__item ${done ? 'list__item_done' : ''}" data-id=${id}>
            <input class="list__item-checkbox" type="checkbox" ${done ? 'checked' : ''}>
            ${text}
        </li>`)
        .join('');
    listElem.innerHTML = todoListItems;
}
renderTasks();

const onStatusTodoChange = event => {
    const isCheckbox = event.target.classList.contains('list__item-checkbox');
    
    if (!isCheckbox) {
        return;
    };

    const currentItem = event.target.closest('.list__item');
    const currentTask = tasks.find(item => item.id === currentItem.dataset.id);
    currentTask.done = !currentTask.done;
    
    renderTasks();
};

listElem.addEventListener('click', onStatusTodoChange);

const onCreateTask = () => {
    const inputTodoCreator = document.querySelector('.task-input');
    
    if (inputTodoCreator.value === '') {
        return;
    };

    const newTask = {
        id: Math.random().toString().slice(2),
        text: inputTodoCreator.value,
        done: false
    };
    tasks.push(newTask);
    inputTodoCreator.value = '';
    renderTasks();
}

const createTodoBtn = document.querySelector('.create-task-btn');
createTodoBtn.addEventListener('click', onCreateTask);
