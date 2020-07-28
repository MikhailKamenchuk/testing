export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    setFullName(fullName) {
        const separatedFullName = fullName.split(' ');
        this.firstName = separatedFullName[0];
        this.lastName = separatedFullName[1];
    }
}