export const pinger = (count, period) => {
    console.log('Ping');
    let i = count;
    setInterval(() => {
        if(--i > 0){
            console.log('Ping');
        } else {
            clearInterval(1)
        }
    }, period);
}
