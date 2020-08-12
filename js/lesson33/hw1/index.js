const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */
export const getTasksList = () => fetch(baseUrl).then(res => res.json())


/* getTaskById code here */
export const getTaskById = taskId => fetch(`${baseUrl}/${taskId}`).then(res => res.json())

    