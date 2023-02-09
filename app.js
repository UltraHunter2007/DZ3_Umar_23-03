var array = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк"]
var arrays = [numbers = [], strings = [], booleans = [], undefineds = [], objects = [], symbols = [], bigints = []]

for (var i = 0; i < array.length; i++) {
    switch(typeof array[i]){
        case "number":
            numbers.push(array[i])
            break
        case "string":
            strings.push(array[i])
            break
        case "boolean":
            booleans.push(array[i])
            break
        case "undefined":
            undefineds.push(array[i])
            break
        case "object":
            objects.push(array[i])
            break
        case "symbol":
            symbols.push(array[i])
            break
        case "bigint":
            bigints.push(array[i])
    }
}
arrays.sort((a, b) => b.length - a.length)
console.log(arrays)