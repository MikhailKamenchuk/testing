import { fetchUserData, fetchReposList } from './getaway.js';
import { renderUserData, renderRepos } from './renderer.js';
import { showSpinner, hideSpinner } from './spinner.js';
import { clearList } from './renderer.js'

const nameFormBtnElem = document.querySelector('.name-form__btn');
const nameFormInputElem = document.querySelector('.name-form__input');

const defaultUser = { avatar_url: 'https://avatars3.githubusercontent.com/u10001' };
renderUserData(defaultUser);

const onSearchUser = async () => {
    try {
        clearList();
        showSpinner();

        if (nameFormInputElem.value === '') return

        const userName = nameFormInputElem.value;

        const userData = await fetchUserData(userName);
        renderUserData(userData);

        const reposData = await fetchReposList(userData.repos_url);
        renderRepos(reposData);
    } catch (error) {
        alert(error.message)
    } finally {
        hideSpinner()
    }
};

nameFormBtnElem.addEventListener('click', onSearchUser)