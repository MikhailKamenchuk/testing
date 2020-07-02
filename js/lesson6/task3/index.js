const getSpecialNumbers = (m, n) => {
    let boundArray = [];
    for (let i = m; i <= n; i++){
        if(i % 3 === 0){
            boundArray.push(i)
        }
    }
    return boundArray
}