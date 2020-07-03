const uniqueCount = (array) => {
    if(!Array.isArray(array)) return null;
    let newArray = array.filter((item, index) => array.indexOf(item) === index);
    return newArray.length;
}