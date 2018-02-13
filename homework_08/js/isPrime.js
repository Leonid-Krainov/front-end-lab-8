let isPrime = (a) => {
    for (let i = 2; i<a; i++) {
        if (Number.isInteger(a/i)) {
            return false;
        } 
    } 
    return true;
}