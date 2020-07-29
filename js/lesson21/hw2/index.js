export const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
}

export const getItemsarray = () => {
    const elementsArray = document.querySelectorAll('.tool');
    console.dir(Array.from(elementsArray));
    return Array.from(elementsArray);
}