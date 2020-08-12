const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");
const nameFormInputElem = document.querySelector('.name-form__input');
const nameFormBtnElem = document.querySelector('.name-form__btn');



const onFetchData = () => {
    const userName = nameFormInputElem.value
    fetch(`https://api.github.com/users/${userName}`)
        .then(res => res.json())
        .then(data => {
            const { avatar_url, name, location } = data;
            userAvatarElem.src = avatar_url;
            userLocationElem.textContent = location;
            userNameElem.textContent = name;
        });
};

nameFormBtnElem.addEventListener('click', onFetchData)