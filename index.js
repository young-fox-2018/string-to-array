function stringToArray(str) {
    let splitStr = str.split(',')
    //console.log(splitStr)
    let board = []
    for (let i = 0; i < splitStr.length; i++) {
        let inner = []
        for (let j = 0; j < splitStr[i].length; j++) {
            inner.push(splitStr[i][j])
        }
        board.push(inner)
    }
    return board
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,ghjk'));