const string_to_array = (str) => {
    let words = str.split(','),
        board = []
    for (let i = 0; i < words.length; i++) {
        let line = []
        for (let j = 0; j < words[i].length; j++) line.push(words[i][j])
        board.push(line)
    }
    return board
}
console.log(string_to_array('aqrst,ukaei,ffooo'))