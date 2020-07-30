export const getSection = num => {
    const targetElementSpan = document.querySelector(`span[data-number="${num}"]`);
    return targetElementSpan.parentElement.dataset.section
}