export const squaredNumbers = () => {
    const elementListItems = document.querySelectorAll('.number');
    return [...elementListItems].map(el => el.dataset.squaredNumber = el.dataset.number * el.dataset.number);
}

