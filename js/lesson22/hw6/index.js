const elementListBtns = document.querySelectorAll('.btn');
const handleClick = event => console.log(event.target.textContent);
[...elementListBtns].map(btn => btn.addEventListener('click', handleClick));