export const getUserASAP = userId => new Promise(resolve => {
    const randomDelay = (from, to) => from + Math.random() * (to - from); 
    const servers = [
        'https://server.com/us/', 
        'https://server.com/eu/', 
        'https://server.com/au/'
    ];
    const request = userUrl => new Promise(res => {
        setTimeout(() => {
            res({
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
    resolve(Promise.race(result));    
});
