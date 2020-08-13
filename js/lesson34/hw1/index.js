/* getUsersList code here */

const getUsersList = () => fetch(`https://5f33e64ccfaf5a001646b6d1.mockapi.io/api/v1/users`).then(res => res.json());

/* getUserById code here */

const getUserById = userId => fetch(`https://5f33e64ccfaf5a001646b6d1.mockapi.io/api/v1/users/${userId}`).then(res => res.json());

/* createUser code here */

const createUser = userData => fetch(`https://5f33e64ccfaf5a001646b6d1.mockapi.io/api/v1/users/`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
})

/* updateUser code here */

const updateUser = (userId, userData) => fetch(`https://5f33e64ccfaf5a001646b6d1.mockapi.io/api/v1/users/${userId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
});

/* deleteUser code here */

const deleteUser = userId => fetch(`https://5f33e64ccfaf5a001646b6d1.mockapi.io/api/v1/users/${userId}`, { method: 'DELETE' });


export {
    getUsersList,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}