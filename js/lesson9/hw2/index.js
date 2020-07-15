const getPeople = obj => Object.entries(obj)
  .map(item => item[1])
  .reduce((a,b) => a.concat(b), [])
  .map(item => Object.values(item))
  .reduce((a,b) => a.concat(b), []);