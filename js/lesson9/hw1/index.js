const getCustomersList = obj =>  Object.entries(obj)
  .map(item => Object.assign({}, item[1], {id: item[0]}))
  .sort((a, b) => a.age > b.age ? 1 : -1);