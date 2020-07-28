import { createLogger } from './index';

it('shold have warn method', () => {
    const logger = createLogger();
    const res = logger;
    expect(res).toHaveProperty('warn');
});
it('shold have error method', () => {
    const logger = createLogger();
    const res = logger;
    expect(res).toHaveProperty('error');
});
it('shold have log method', () => {
    const logger = createLogger();
    const res = logger;
    expect(res).toHaveProperty('log');
});
it('shold have getRecords method', () => {
    const logger = createLogger();
    const res = logger;
    expect(res).toHaveProperty('getRecords');
});
it('shold get empty array', () => {
    const logger = createLogger();
    const res = logger.getRecords();
    expect(res).toHaveLength(0);
});
it('shold get array with ome warn message', () => {
    const logger = createLogger();
    logger.warn('Warn message');
    const res = logger.getRecords();
    expect(res[0]).toHaveProperty('message', 'Warn message');
});
it('shold get array with ome warn message', () => {
    const logger = createLogger();
    logger.error('Error message')
    const res = logger.getRecords();
    expect(res[0]).toHaveProperty('message','Error message');
});
it('shold get array with ome log message', () => {
    const logger = createLogger();
    logger.log('Log message')
    const res = logger.getRecords();
    expect(res[0]).toHaveProperty('message','Log message');
});