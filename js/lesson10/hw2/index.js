const getRandomNumbers = (len, start, end) => {
    if(Math.abs(end - start) < 1) return null;
    let randomNumbersArray = [];
    for(let i = 0; i < len; i++){
      let randomNumber =  Math.random() * (end - start) + start;
      randomNumber < 0 ? randomNumber = Math.ceil(randomNumber) : randomNumber = Math.floor(randomNumber); 
      randomNumbersArray.push(randomNumber);
    }
    return randomNumbersArray
}