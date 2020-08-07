// input: string, func
// output: ---

// algo 
// create user object
// create generator random delay
// return callback with data from delay

export function requestUserData(userId, callback){
    const randomDelay = Math.floor((Math.random() * 3) + 1) * 1000;
    
    if( userId === 'broken' ){
        setTimeout(() => callback(null, 'Failed to load user data'), randomDelay);
    }else{
        setTimeout(() => callback({
            userId,
            email: `${userId}@example.com`,
        }), randomDelay);
    }
}
