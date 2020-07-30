export const finishList = () => {
    const newElementItem1 = document.createElement('li');
    const newElementItem4 = document.createElement('li');
    const newElementItem6 = document.createElement('li');
    const newElementItem8 = document.createElement('li');

    newElementItem1.textContent = '1';
    newElementItem4.textContent = '4';
    newElementItem6.textContent = '6';
    newElementItem8.textContent = '8';

    const elementParent = document.querySelector('.list');
    const elementSpecial = document.querySelector('.special');
   
    elementParent.append(newElementItem8);
    elementParent.prepend(newElementItem1);
    elementSpecial.before(newElementItem4);
    elementSpecial.after(newElementItem6);
}