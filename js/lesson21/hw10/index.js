export const manageClasses = () => {
    const elementItem1 = document.querySelector('.one');
    const elementItem2 = document.querySelector('.two');
    const elementItem3 = document.querySelector('.three');
    const elementItem4 = document.querySelector('.four');

    elementItem1.classList.add('selected');
    elementItem2.classList.remove('selected');
    elementItem3.classList.toggle('three_done');
    if(elementItem4.classList.contain('some-class')){
        elementItem4.classList.add('another-class');
    }
}

