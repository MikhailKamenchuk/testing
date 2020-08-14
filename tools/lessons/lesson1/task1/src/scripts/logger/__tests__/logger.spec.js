import { createLogger } from '../logger';

it('should return all loggers', () => {
    const logger = createLogger('FirstTestlogger');
    expect(logger.getLogs()).toEqual([])
});

it('should return logger whis type "log"', () => {
    const logger = createLogger('SecondTestlogger');
    logger.log('firstLog');
    expect(logger.getLogs()).toEqual(['log - SecondTestlogger - firstLog']);
});

it('should return logger whis type "error"', () => {
    const logger = createLogger('ThirdTestlogger');
    logger.error('firstError');
    expect(logger.getLogs()).toEqual(['error - ThirdTestlogger - firstError']);
});

it('should return loggers whis type "error"', () => {
    const logger = createLogger('ThirdTestlogger');
    logger.error('firstError');
    logger.error('secondError');
    expect(logger.getLogs()).toEqual([
        'error - ThirdTestlogger - firstError',
        'error - ThirdTestlogger - secondError'
    ]);
});