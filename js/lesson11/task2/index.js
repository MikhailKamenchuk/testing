const splitText = (str, len = 10) => {
    
    if(!typeof str)return null;
    
    let currentIndex = 0;
    let arr = [];
     
    while(true){
      let piace = str.substr(currentIndex, len);
      
      if(piace.length === 0) break;
      
      arr.push(piace[0].toUpperCase() + piace.slice(1, piace.length));
      currentIndex += len;
      
    }
    return arr.join('\n');
}