const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData
}
const addPropertyV2 = (userData, userId) => {
    const id = {id: userId}
    Object.assign(userData, id)
    return userData
}
const addPropertyV3 = (userData, userId) => {
    const id = {id: userId}; 
    return Object.assign({}, userData, id)
}
const addPropertyV4 = (userData, userId) => {
    return {
      ...userData,
      id: userId
    }
}