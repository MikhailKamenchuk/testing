export const getUserASAP = userId => {
    const randomDelay = (from, to) => from + Math.random() * (to - from); 
    const servers = [
        'https://server.com/us/', 
        'https://server.com/eu/', 
        'https://server.com/au/'
    ];
    const request = userUrl => new Promise(resolve => {
        setTimeout(() => {
            resolve({
                userData: {
                    name: 'Tom',
                    age: 18
                },
                source: userUrl
            })
        }, randomDelay(1000, 3000));
    })
    const usersUrl = servers.map(server => `${server}${userId}`);
    const result = usersUrl.map(urlForRequest => request(urlForRequest));
    return Promise.race(result);    
};

// getUserASAP('id-1').then(res => console.log(res))