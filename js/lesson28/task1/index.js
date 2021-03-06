export const calc = value => {
    let res = value;
    return {
        add(num) {
            res += num;
            return this
        },
        subtract(num){
            res -= num;
            return this
        },
        mult(num){
            res *= num;
            return this
        },
        div(num){
            res /= num;
            return this
        },
        result(){
            return res
        }
    }
}

