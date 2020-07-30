export const clearList = () => {
    const elementList = document.querySelector('.categories');
    elementList.innerHTML = '';
    return elementList
}