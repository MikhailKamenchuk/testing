const elementInput = document.querySelector('.search_input');
const elementBtn = document.querySelector('.search_btn');
const handleClick = () => console.log(elementInput.value);
elementBtn.addEventListener('click', handleClick);