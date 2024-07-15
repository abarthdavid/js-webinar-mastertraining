/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci;

    if (n >= 0) {
        if(n < 2) {
            nThFibonacci = n;
        } else {
            let f0 = 0;
            let f1 = 1;
            for(let i = 2; i <= n; ++i) {
                const sum = f0 + f1;
                f0 = f1;
                f1 = sum;
            }
            nThFibonacci = f1;
        } 
    } else {
        nThFibonacci = 0; 
   }

   return nThFibonacci;
}
module.exports = fibonacci;