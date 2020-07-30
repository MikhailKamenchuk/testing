const elementInput = document.querySelector('.search__input');
const elementBtn = document.querySelector('.search__btn');
const handleClick = () => console.log(elementInput.value);
elementBtn.addEventListener('click', handleClick);