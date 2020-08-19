import { createTasksItem } from './renderTasks';

describe('createItem function test', () => {
  let taskItem = null;

  beforeEach(() => {
    const taskData = {
      id: '1',
      finishedDay: null,
      createDate: '2020-08-13T04:48:37.433Z',
      text: 'Task 1',
      done: false,
    };
    taskItem = createTasksItem(taskData);
  });
  it('Task item should contain textContent node', () => {
    expect(taskItem.textContent).toBe('Task 1');
  });
  it('Task item should data-attribute-id ', () => {
    expect(taskItem.dataset.id).toBe('1');
  });
  it('Task item should not contain class "list__item_done"', () => {
    expect(taskItem.classList.contains('list__item_done')).toBeFalsy();
  });
});
