const getPrimes = num => {
    function isPrime(n) {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    for(let i = 0; i <= num; i++){
      if (isPrime(i) && i > 1){
        console.log(i)
      } 
    }
}

