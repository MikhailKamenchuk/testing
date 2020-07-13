const pickProps = (obj, arr) => {
    let result = {};
    arr.forEach(item => {
      if(obj[item]){
        result[item] = obj[item]
      }
    } )
    return result
}