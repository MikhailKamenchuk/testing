const divElement = document.querySelector('.rect_div');
const pElement = document.querySelector('.rect_p');
const spanElement = document.querySelector('.rect_span');

const elementEventList = document.querySelector('.events-list');


const handlerListGenerator = (text, color) => elementEventList.innerHTML += `<span style='color: ${color}; margin-left: 8px' >${text}</span>`;

const logDivElementGrey = handlerListGenerator.bind(null, 'DIV', 'grey');
const logPElementGrey = handlerListGenerator.bind(null, 'P', 'grey');
const logSpanElementGrey = handlerListGenerator.bind(null, 'SPAN', 'grey');
const logDivElementGreen = handlerListGenerator.bind(null, 'Div', 'green');
const logPElementGreen = handlerListGenerator.bind(null, 'P', 'green');
const logSpanElementGreen = handlerListGenerator.bind(null, 'SPAN', 'green');


const elementClearListBtn = document.querySelector('.clear-btn');
const elementRemoveHandlersBtn = document.querySelector('.remove-handlers-btn');
const elementAttachHandlersBtn = document.querySelector('.attach-handlers-btn');

const clearList = () => elementEventList.innerHTML = '';
const removeHandlers = () => {
    divElement.removeEventListener('click', logDivElementGrey, true);
    pElement.removeEventListener('click', logPElementGrey, true);
    spanElement.removeEventListener('click', logSpanElementGrey, true);

    divElement.removeEventListener('click', logDivElementGreen);
    pElement.removeEventListener('click', logPElementGreen);
    spanElement.removeEventListener('click', logSpanElementGreen);
}
const attachHandlers = () => {
    divElement.addEventListener('click', logDivElementGrey, true);
    pElement.addEventListener('click', logPElementGrey, true);
    spanElement.addEventListener('click', logSpanElementGrey, true);

    divElement.addEventListener('click', logDivElementGreen);
    pElement.addEventListener('click', logPElementGreen);
    spanElement.addEventListener('click', logSpanElementGreen);

}

elementClearListBtn.addEventListener('click', clearList);
elementRemoveHandlersBtn.addEventListener('click', removeHandlers);
elementAttachHandlersBtn.addEventListener('click', attachHandlers);
document.addEventListener("DOMContentLoaded", attachHandlers, true)


