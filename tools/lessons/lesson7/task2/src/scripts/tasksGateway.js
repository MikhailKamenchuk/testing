const baseUrl = 'https://5f33e64ccfaf5a001646b6d1.mockapi.io/api/v1/tasks';

const getTasksList = () => fetch(baseUrl).then(res => res.json());

const getTask = taskId => fetch(`${baseUrl}/${taskId}`).then(res => res.json());

const createTask = taskData => fetch(baseUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
})

const updateTask = (taskId, taskData) => fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
});

const deleteTask = taskId => fetch(`${baseUrl}/${taskId}`, { method: 'DELETE' });

export {
    getTasksList,
    getTask,
    createTask,
    updateTask,
    deleteTask
}