export const createButton = buttonText => {
    const newButtonElement = document.createElement('button');
    newButtonElement.textContent = buttonText;
    const elementParent = document.querySelector('body');
    return elementParent.append(newButtonElement);
}