export class Order {
    id = String(Math.random())
    price = 0
    dateCreated = new Date()
    isConfirmed = false
    dateConfirmed = null
    city = ''
    type = ''

    constructor(price, city, type){
        this.price = price;
        this.city = city;
        this.type = type;
    }

    checkPrice(){
        return this.price > 1000 
    }

    confirmOrder(){
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }

    isValidType(){
        return this.type === 'Buy' || this.type === 'Sell' ? true : false
    }
}