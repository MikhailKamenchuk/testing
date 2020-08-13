const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");
const repoListElem = document.querySelector('.repo-list');

export const clearList = () => repoListElem.innerHTML = '';

export const renderUserData = userData => {
    const { avatar_url, name, location } = userData;
    userAvatarElem.src = avatar_url;
    userLocationElem.textContent = location
        ? `from ${location}`
        : '';
    userNameElem.textContent = name;
}

export const renderRepos = reposList => {
    const list = reposList.map(({ name }) => {
        const newRepoItem = document.createElement('li');
        newRepoItem.classList.add('repo-list__item');
        newRepoItem.textContent = name;
        return newRepoItem;
    })
    repoListElem.append(...list)
}