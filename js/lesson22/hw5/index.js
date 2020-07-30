const elementBtn = document.querySelector('.single-use-btn');
const handleClick = event => {
    console.log('clicked')
    event.target.removeEventListener('click', handleClick)
};
elementBtn.addEventListener('click', handleClick);
