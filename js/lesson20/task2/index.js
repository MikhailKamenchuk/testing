class Vehicle {
    constructor(name, numberOfWeels){
        this.name = name;
        this.numberOfWeels = numberOfWeels;
    }
    move(){
        console.log(`${this.name} is moving`)
    }
    stop(){
        console.log(`${this.name} stopped`)
    }
};

class Ship extends Vehicle {
    constructor(name, numberOfWeels, maxSpeed){
        super(name, numberOfWeels);
      this.maxSpeed = maxSpeed
    }
    move(){
        console.log(`${this.name} lifting anchor up`);
        super.move();
    }
    stop(){
        super.stop();
        console.log(`${this.name} lifting anchor down`);
    }
};

export{
    Vehicle,
    Ship
}