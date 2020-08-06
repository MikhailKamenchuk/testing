// input: string, func
// output: ---

// algo 
// create user object
// create generator random delay
// return callback with data from delay

export function requestUserData(userId, callback){
    const user = {
        userId,
        email: `${userId}@example.com`,
    }
    const randomDelay = Math.floor((Math.random() * 3) + 1) * 1000;
    
    if( userId === 'broken' ){
        setTimeout(() => callback(null, 'Failed to load user data'), randomDelay);
    }else{
        setTimeout(() => callback(user), randomDelay);
    }
}

// const onUserDataRequested = (obj, error) => {
//     if (error) {
//         console.log(error);
//         return;
//     };
    
//     console.log(obj)
// }
// requestUserData('id-12345678', onUserDataRequested)
// requestUserData('broken', onUserDataRequested)