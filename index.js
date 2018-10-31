function stringToArray (str) {
    let results = []
    let index = 0
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            results.push([])
            results[index].push(str[i])
        }
        else if (str[i] === ',') {
            results.push([])
            index++
        } else {
            results[index].push(str[i])
        }
    }
return results
}

console.log(stringToArray("aqrst,ukaei,ffooo"))
console.log(stringToArray("qwet,tyui,asdf,ghjk"))