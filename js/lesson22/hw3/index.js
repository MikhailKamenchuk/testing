const elementChecbox = document.querySelector('.task-status');
const handlerChange = event => console.log(event.target.checked);
elementChecbox.addEventListener('change', handlerChange);