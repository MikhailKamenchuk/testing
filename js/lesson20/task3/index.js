export class Wallet {
    balance = 0

    getBalance(){
        return this.balance;
    }

    deposit(count){
        return this.balance += count;
    }

    withdraw(count){
        if(this.balance - count < 0){
            console.log('No enough funds');
            return
        } else{
            return this.balance -= count;
        }
    }
}