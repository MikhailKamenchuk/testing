export const createLogger = message => {
    const loggers = [];
    function warn(text){
        const newLog = {
            message: text,
            dateTime: new Date(),
            type: 'warn'
        };
        return loggers.push(newLog);
    };
    function error(text){
        const newLog = {
            message: text,
            dateTime: new Date(),
            type: 'error'
        };
        return loggers.push(newLog);
    };
    function log(text){
        const newLog = {
            message: text,
            dateTime: new Date(),
            type: 'log'
        };
        return loggers.push(newLog);
    };
    function getRecords(type){
        if(!type) return loggers;
        return loggers
            .filter(el => el.type === type)
            .sort((a, b) => a.dateTime > b.dateTime)
    }
    return{
        warn,
        error,
        log,
        getRecords
    }
}