import { renderTasks } from './renderTasks';
import { updateTask, getTask, deleteTask } from './tasksGateway';

export const onStatusTodoChange = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }
  const currentTaskIdex = event.target.closest('.list__item').dataset.id;
  getTask(currentTaskIdex)
    .then((currentTask) => {
      if (!currentTask.done) {
        currentTask.done = true;
        currentTask.finishedDay = new Date().getTime();
      } else {
        currentTask.done = false;
        currentTask.finishedDay = null;
      }

      return currentTask;
    })
    .then((dataToUpdate) => {
      updateTask(currentTaskIdex, dataToUpdate)
        .then(() => {
          renderTasks();
        });
    });
};

export const onDeleteTodo = (event) => {
  const isDelBtn = event.target.classList.contains('list__item__delete-btn');

  if (!isDelBtn) {
    return;
  }

  const currentTaskIdex = event.target.closest('.list__item').dataset.id;

  deleteTask(currentTaskIdex)
    .then(() => {
      renderTasks();
    });
};
