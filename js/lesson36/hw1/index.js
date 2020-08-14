const fetchUserData = userId => fetch(`https://api.github.com/users/${userId}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failet to fetch')
    })

export const getUsersBlogs = async arrUserNames => {
    const usersBlogs = arrUserNames.map(async userId => {
        const res = await fetchUserData(userId);
        return res.blog
    });
    
    return Promise.all(usersBlogs)
}
