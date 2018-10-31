function strToArray(input) {
    let result = []
    let arr = []
    for (let i = 0; i <= input.length; i++) {
        if (input[i] === "," || i === input.length) {
            result.push(arr)
            arr = []
        } else {
            arr.push(input[i])
        }
    }
    return result 
}

console.log(strToArray("aqrst,ukaei,ffooo"))
console.log(strToArray("qwer,tyui,asdf,ghjk"))