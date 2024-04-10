debugger

// console.log('Hello World!');

function addSum(n, x) {
    if (n=== 0) return x;
    n -= 1;
    x += 1;
    return addSum(n,x);
}

console.log(addSum(5,2))