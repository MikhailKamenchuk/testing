export class Order {
    id = String(Math.random())
    price = 0
    dateCreated = Date()
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
        if(!this.isConfirmed) this.isConfirmed = true;
        this.dateConfirmed = Date();
    }

    isValidType(){
        return this.type === 'Buy' || this.type === 'Sell' ? true : false
    }
}