const withdraw = (clients, balances, client, amount) => {
    let index = clients.findIndex(item => item === client);
    if(balances[index] < amount) return -1;
    balances[index] -= amount;
    return balances[index];
}