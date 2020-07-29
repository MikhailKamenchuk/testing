export const clearList = () => {
    const elementList = document.querySelector('.categiries');
    elementList.innerHTML = '';
    return elementList
}