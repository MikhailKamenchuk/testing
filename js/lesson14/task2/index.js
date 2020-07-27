const createMessanger = () => {
    let message;
    let sender;
    const sendMessage = name => console.log(`${name}, ${message}! Your ${sender}`);
    const setMessage = text => message = text;
    const setSender = text => sender = text;
    return {
        sendMessage,
        setMessage,
        setSender
    }
};
export default createMessanger;