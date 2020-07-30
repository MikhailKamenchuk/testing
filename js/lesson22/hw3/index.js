export const getTitle = () => {
    const elementTitle = document.querySelector('.title');
    return elementTitle.textContent
}

export const getDescription = () => {
    const elementTitle = document.querySelector('.about');
    return elementTitle.innerText
}

export const getPlans = () => {
    const elementTitle = document.querySelector('.plans');
    return elementTitle.innerHTML
}

export const getGoal = () => {
    const elementTitle = document.querySelector('.goal');
    return elementTitle.outerHTML
}