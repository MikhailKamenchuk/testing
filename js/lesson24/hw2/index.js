// algo:
// 1. add values in tasks about date created task and date finished task;
// 2. refactor render function: add sort array with new data;
// 3. refactor createTask function. All new task must have two new fields;
// 4. refactor handle change function for change finishedDate field in the current task

const tasks = [
    { 
        id: Math.random().toString().slice(2), 
        text: 'Buy milk', 
        done: false, 
        createDate: new Date(2020, 1, 1, 11, 10, 10).getTime(),
        finishedDay: null,
    },
    { 
        id: Math.random().toString().slice(2), 
        text: 'Pick up Tom from airport', 
        done: false,
        createDate: new Date(2020, 1, 2, 11, 10, 10).getTime(),
        finishedDay: null,
    },
    { 
        id: Math.random().toString().slice(2), 
        text: 'Visit party', 
        done: false ,
        createDate: new Date(2020, 1, 3, 11, 10, 10).getTime(),
        finishedDay: null,
    },
    { 
        id: Math.random().toString().slice(2), 
        text: 'Visit doctor', 
        done: true,
        createDate: new Date(2020, 1, 4, 11, 10, 10).getTime(),
        finishedDay: new Date(2020, 6, 4, 11, 10, 10).getTime(),
    },
    { 
        id: Math.random().toString().slice(2), 
        text: 'Buy meat', 
        done: true,
        createDate: new Date(2020, 1, 2, 11, 10, 10).getTime(),
        finishedDay: new Date(2020, 6, 5, 11, 10, 10).getTime(),
     },
];

const listElem = document.querySelector('.list');

const renderTasks = () => {
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

const onStatusTodoChange = event => {
    const isCheckbox = event.target.classList.contains('list__item-checkbox');
    
    if (!isCheckbox) {
        return;
    };

    const currentTask = tasks.find(item => item.id === event.target.closest('.list__item').dataset.id);
    
    if(!currentTask.done) {
        currentTask.done = true;
        currentTask.finishedDay = new Date().getTime()
    } else {
        currentTask.done = false;
        currentTask.finishedDay = null;
    };
    
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
        done: false,
        createDate: new Date(),
        finishedDay: null,
    };
    tasks.push(newTask);
    inputTodoCreator.value = '';
    renderTasks();
}

const createTodoBtn = document.querySelector('.create-task-btn');
createTodoBtn.addEventListener('click', onCreateTask);
