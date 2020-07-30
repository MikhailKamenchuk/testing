export const finishForm = () => {
    const newElementInput = document.createElement('input');

    newElementInput.setAttribute('type', 'text');
    newElementInput.setAttribute('name', 'login');

    const elementParent = document.querySelector('.login-form');

    elementParent.append(newElementInput);

    const elementInputPassword = document.querySelector('input[name="password"]');
    elementInputPassword.setAttribute('type', 'password')

}