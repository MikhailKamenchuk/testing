const superRound = (num, roundingAccuracy) => {
    const destructedRoundingAccuracy = +'1'.padEnd(roundingAccuracy + 1, '0');
    return [
        Math.floor(num * destructedRoundingAccuracy) / destructedRoundingAccuracy, 
        Math.round(num * destructedRoundingAccuracy) / destructedRoundingAccuracy, 
        Math.ceil(num * destructedRoundingAccuracy) / destructedRoundingAccuracy, 
        Math.trunc(num * destructedRoundingAccuracy) / destructedRoundingAccuracy, 
        +num.toFixed(roundingAccuracy)
    ]
} 