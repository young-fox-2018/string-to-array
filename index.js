function stringToArray(string) {
    var splitString = string.split(',')
    var result = []
    for (let i = 0; i < splitString.length; i++) {
        var newSplit = splitString[i].split('')
        // console.log(newSplit)
        result.push(newSplit)
    }
    return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
// [ [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ] ]

console.log(stringToArray('qwer,tyui,asdf,ghjk'))
// [ [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ] ]