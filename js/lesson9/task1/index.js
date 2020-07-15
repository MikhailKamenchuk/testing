const getAdults = obj =>  Object.entries(obj).filter(item => item[1] >= 18).map(item => item[0]);
