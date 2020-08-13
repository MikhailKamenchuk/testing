export const parseUser = someJson => {
    try {
        const result = JSON.parse(someJson);
        return result
    } catch (error) {
        return null
    }
}

