function stringToArray(string) {
    let input = []
    string = string.split(',')
    for (let i = 0; i < string.length; i++) {
        input.push(string[i].split(''))
        
    }
    return input
}

console.log(stringToArray("aqrst,ukaei,ffooo"))