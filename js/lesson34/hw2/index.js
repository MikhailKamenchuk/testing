const loginFormElem = document.querySelector('.login-form');
// submit-button
const errorTextElem = document.querySelector('.error-text');
const baseUrl = 'https://5f33e64ccfaf5a001646b6d1.mockapi.io/api/v1/users';

const fetchRequest = (loginData) => fetch(baseUrl, {
    method: 'POST',
    headers: 'Content-Type: application/json; charset=UTF-8',
    body: JSON.stringify(loginData)
})

const onSendLoginData = e => {
    loginFormElem.reportValidity();
}
loginFormElem.addEventListener('submit', onSendLoginData)