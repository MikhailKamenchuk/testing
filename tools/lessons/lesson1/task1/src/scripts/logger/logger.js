export const createLogger = loggerName => {
    const loggers = [];
    return {
        getLogs() {
            return loggers
        },
        log(message) {
            loggers.push(`log - ${loggerName} - ${message}`)
        },
        error(errorText) {
            loggers.push(`error - ${loggerName} - ${errorText}`)
        }
    }
};
