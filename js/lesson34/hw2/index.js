const loginFormElem = document.querySelector('.login-form');
const submitFormBtnElem = document.querySelector('.submit-button');
const errorTextElem = document.querySelector('.error-text');
const baseUrl = 'https://5f33e64ccfaf5a001646b6d1.mockapi.io/api/v1/users2';

const fetchRequest = loginData => fetch(baseUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(loginData)
})

const onFormFieldsChange = () => {
    errorTextElem.textContent = null;

    if (loginFormElem.reportValidity()) {
        submitFormBtnElem.disabled = false
    }
}
loginFormElem.addEventListener('input', onFormFieldsChange);

const onSendLoginData = e => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    console.log(formData);
    fetchRequest(formData)
        .then(res => res.json())
        .then(data => {
            e.target.reset();
            alert(JSON.stringify(data));
            
        })
        .catch(() => {
            errorTextElem.textContent = 'Failed to create user' 
        })
}
loginFormElem.addEventListener('submit', onSendLoginData);
