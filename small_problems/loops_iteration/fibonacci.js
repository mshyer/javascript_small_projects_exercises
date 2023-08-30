function fibonacci(number) {
    if (number === 2) {
        return 1;
    } else if (number === 1) {
        return 0;
    } else {
        return fibonacci(number - 2) + fibonacci(number - 1);
    }
}

console.log(fibonacci(21));
console.log(fibonacci(20));
console.log(fibonacci(6));
/* Fibonacci takes n and n+ 1 and adds them together.
 * Recursive functions start off returning n
 * 0 1 1
 * so fib 
 * fib(3) i += fib(2)==1==2
 * fib(2) i += fib(1)==0==1
console.log(fibonacci(20));
*/
