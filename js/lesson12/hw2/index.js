const cleanTransactionsList = arr => {
    const isContainLetters = str => str.match(/[a-zA-Z]/g);
    const copiedArr = [...arr];
    return copiedArr 
      .filter(item => !isContainLetters(item))
      .map(item => String(Number(item).toFixed(2)).trim())
      .map(item => `$${item}`);
}