export const fetchUserData = async userName => {
    const response = await fetch(`https://api.github.com/users/${userName}`)

    if (response.ok) {
        return await response.json()
    }
    throw new Error('Failed to load data')

}


export const fetchReposList = async reposUrl => {
    const response = await fetch(reposUrl)

    if (response.ok) {
        return await response.json()
    }

    throw new Error('Failed to load data')
}