export const getOwnProps = obj => {
    return Object.entries(obj)
                .filter(item => typeof item[1] !== 'function')
                .map(item => item[0]);

}