export const event = {
    message: 'Welcome to the party!',
    guests: [
        { name: 'John', age: 18, email: 'example@server.com' },
        { name: 'Tom', age: 17, email: 'ixample@server.com' }
    ],
    getInvitations() {
        return this.guests
                        .filter(guest => guest.age >= 18)
                        .map(({email, name}) => {
                            return {
                                email,
                                message: `Dear ${name}! ${this.message}`
                            }
                        });
    }
}