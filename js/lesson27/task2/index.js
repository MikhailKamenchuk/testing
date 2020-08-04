const counterElem = document.querySelector('.counter');
const counterValueElem = counterElem.querySelector('.counter__value')

const onChangeCount = e => {
    const isBtn = e.target.classList.contains('counter__btn');
    if (!isBtn) {
        return;
    };
    const oldValue = Number(counterValueElem.textContent);
    const newValue = e.target.dataset.action === 'increase'
        ? oldValue + 1
        : oldValue - 1;

    counterValueElem.textContent = newValue;
    localStorage.setItem('counter', newValue);
}
counterElem.addEventListener('click', onChangeCount);

const onLoadFromLocalStorage = () => {
    const newData = localStorage.getItem('counter');

    if (!newData) {
        return;
    };
    counterValueElem.textContent = newData;
}
document.addEventListener('DOMContentLoaded', onLoadFromLocalStorage);

const onStorageChange = e => {
    counterValueElem.textContent = e.newValue;

};
window.addEventListener('storage', onStorageChange);
