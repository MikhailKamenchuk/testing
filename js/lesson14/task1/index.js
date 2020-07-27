let message = 'Just learn it'
export const sendMessage = name => {
    return console.log(`${name}, ${message}! Your Gromcode`)
}

export const setMessage = text => message = text;