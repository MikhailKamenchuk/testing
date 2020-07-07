const withdraw = (clients, balances, client, amount) => {
    const clientId = clients.indexOf(client);
    if (balances[clientId] >= amount) {
      return balances[clientId] -= amount;
    } else {
      return -1
    }    
}