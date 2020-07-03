const sortAsc = (array) => {
    if(!Array.isArray(array)) return null;
    let newArray = array.map(item => item);
    for (let j = 0; j < newArray.length - 1; j++) {
      for (let i = 0, swapping; i < newArray.length - 1; i++) {
        if (newArray[i] > newArray[i + 1]) {
          swapping = newArray[i + 1];
          newArray[i + 1] = newArray[i];
          newArray[i] = swapping;
          }; 
      }; 
    };
    return newArray
}

const sortDesc = (array) => {
    if(!Array.isArray(array)) return null;
    let newArray = array.map(item => item);
    for (let j = 0; j < newArray.length - 1; j++) {
      for (let i = 0, swapping; i < newArray.length - 1; i++) {
        if (newArray[i] < newArray[i + 1]) {
          swapping = newArray[i + 1];
          newArray[i + 1] = newArray[i];
          newArray[i] = swapping;
          }; 
      }; 
    };
    return newArray
}