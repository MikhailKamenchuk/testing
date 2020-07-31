const formElem = document.querySelector('.login-form');
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => value
    ? undefined
    : 'Required';

const isEmail = value => value.includes('@')
    ? undefined
    : 'Should be an email';

const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired]
}
const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName]
     return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join(', ');
}


const onEmailChange = event => {
    const errorText = validate('email', event.target.value);
    return emailErrorElem.textContent = errorText;
}

const onPasswordChange = event => {
    const errorText = validate('password', event.target.value);
    return passwordErrorElem.textContent = errorText;
}

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);
// const data = new FormData(formElem);
// console.log(data);
// const formData = .reduce((acc, formField) => {
//     const [prop, value] = formField;
//     // console.log(prop, value)
//     return {
//         ...acc,
//         [prop]: value,
//     };
// }, {});
const logged = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)].reduce((acc, formField) => {
        const [prop, value] = formField;
        // console.log(prop, value)
        return {
            ...acc,
            [prop]: value,
        };
    }, {});  
    return alert(JSON.stringify(formData)) 
}
formElem.addEventListener('submit', logged)