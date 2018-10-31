function stringToArray(str) {
    let result = []
    let tempArr = []

    for(let i = 0; i  < str.length; i++) {
        if(str[i] === ',') {
            result.push(tempArr)
            tempArr = []
        } else {
            tempArr.push(str[i])
        }
    }

    result.push(tempArr)
    return result 
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))