/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    if (typeof n !== "number" || n < 0) {
        throw new Error();
    }

    if (n < 2) {
        return n;
    }
    return fibonacci(n-2) + fibonacci(n-1);
}
module.exports = fibonacci;