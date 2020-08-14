export const fetchUser = async userId => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        if (response.ok) {
            return await response.json()
        }
        return null
    } catch (error) {
        return
    }
}

