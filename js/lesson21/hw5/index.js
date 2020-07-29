export const setButton = (buttonText) => {
    const elementBody = document.querySelector('body');
    elementBody.innerHTML = `<button>${buttonText}</button>`;
    return elementBody
}