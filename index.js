function stringToArray(str) {
    let board = []
    let row = str.split(",")
    for (let i = 0; i < row.length; i++) {
        let col = row[i].split("")
        board.push(col)
    }
    return board
}

console.log(stringToArray("qwer,tyui,asdf,ghjk"));
