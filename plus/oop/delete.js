/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 * 
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */

function del(o, key) {
    //objectum vizsgálat, ha nem objektum akkor dobjunk egy hibát
    if(typeof o !== "object") {
        throw new Error("It is not an object");
    } else {
    //const c = Object.assign({}, o);
    // javascript copy object, hogyan lehet még máshogyan másolni objectet?
    const c = { ...o }
    delete c[key];
    return c;
    }
}

module.exports = del;