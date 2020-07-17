const splitString = (str, len = 10) => {
    if(typeof str !== 'string') return null;
    let currentIndex = 0;
    const arr = [];
     
    while(true){
      let piace = str.substr(currentIndex, len);
      
      if(piace.length === 0) break;
      
      console.log(piace.length)

      if(piace.length < len) {
        console.log('here');
        piace = piace.padEnd(len, '.')
      }
      
      arr.push(piace);
      currentIndex += len;
      
    }
    return arr
}