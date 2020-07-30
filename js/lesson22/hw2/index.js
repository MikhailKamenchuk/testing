const elementInput = document.querySelector('.text-input');
const handlerChange = e => console.log(e.target.value);
elementInput.addEventListener('change', handlerChange)