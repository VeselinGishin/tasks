function getEvenNumbers(start, end) {
    const evens = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        }
    }
    return evens;
}

console.log(getEvenNumbers(10, 30));
