const elementsBtnsList = document.querySelectorAll('.pagination__page');
const handleClick = event => console.log(event.target.dataset.pageNumber);
[...elementsBtnsList].map(btn => btn.addEventListener('click', handleClick))