export class User {
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    sayHi(){
        console.log(`Hi, I am ${this.name}`)
    }

    requestNewPhoto(){
        console.log(`New photo request was sent for ${this.name}`)
    }

    setAge(newAge){
        if(newAge < 0) return false;
        if(newAge >= 25){
            this.age = newAge;
            this.requestNewPhoto();
        }
        return newAge
    }

    static createEmpty(){
        this.name = '';
        this.age = null
    }
}

