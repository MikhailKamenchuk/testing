
export const fetchUserData = userName => fetch(`https://api.github.com/users/${userName}`)
        .then(res => {
            if(res.ok) {
                return res.json()
            }
            throw new Error('Failed to load data')
        });

export const fetchReposList = reposUrl => fetch(reposUrl)
.then(res => {
    if(res.ok) {
        return res.json()
    }
    throw new Error('Failed to load data')
});