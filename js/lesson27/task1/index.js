localStorage.setItem('num',  JSON.stringify(23));
localStorage.setItem('arr',  JSON.stringify([1, 'qwd']));
localStorage.setItem('str',  JSON.stringify('846'));

const getLocalStorageData = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
           acc[key] = JSON.parse(value);
           return acc
        }, {})
}

export{
    getLocalStorageData
}
// console.log(getLocalStorageData())
   