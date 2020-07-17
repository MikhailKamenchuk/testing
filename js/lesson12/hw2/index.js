const cleanTransactionsList = arr => {
    return [...arr]
      .filter(item => !isNaN(item))
      .map(item => `$${String(Number(item).toFixed(2)).trim()}`);
}