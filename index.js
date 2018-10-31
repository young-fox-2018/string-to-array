function stringToArray(input) {
    let splitted = input.split(',')
    let result = []
    for (let i = 0; i < splitted.length; i++) {
        let arr = []
        for (let j = 0; j < splitted[i].length; j++) {
            arr.push(splitted[i][j])
        }
        result.push(arr)
    }
    return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))