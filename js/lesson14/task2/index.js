const createMessanger = () => {
    let message = 'Just learn it';
    let sender = 'Gromcode';
    function sendMessage(name){
      console.log(`${name}, ${message}! Your ${sender}`)
    };
    function setMessage(mes){
      message = mes;
    }
    function setSender(text){
      sender = text;
    };
    return {
        sendMessage,
        setMessage,
        setSender
    }
};
export default createMessanger;