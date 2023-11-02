function curriedAdd(total) {

    if (total === undefined) total = 0;

    function accumulator(num) {
        if (num === undefined) return total;
        total += num;
        return accumulator;
    }

    return accumulator;
}

const add = curriedAdd(50);

console.log(add(5)(10)(15)(20)());

// The concept of closure is applied in the curriedAdd function. 
// Specifically, the inner function accumulator forms a closure over the total
// variable, allowing it to "remember" and access the total variable even
// after the curriedAdd function has finished executing.