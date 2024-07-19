/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */

function reverse(o) {
    if(typeof o !== "object") {
        throw new Error("It is not an object");
    } else {
    const reverseObj = Object.fromEntries(Object.entries(o).map(([key, value]) => [value, key]));
    return reverseObj;
    }

}

module.exports = reverse;