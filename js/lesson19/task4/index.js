export const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(prop){
        const [firstName, lastName] = prop.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
};