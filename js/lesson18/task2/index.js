export const wallet = {
    transactions: [1,2,3,1,4,6,5,651],
    getMax(){
        return Math.max(...this.transactions);
    },
    getMin(){
        return Math.min(...this.transactions);
    }
}