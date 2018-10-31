function stringToArray(string) {
    var arrStr = string.split(',');
    var result = [];
    // console.log(arrStr);
    for (let i = 0; i < arrStr.length; i++) {
        result.push([]);
        for (let j = 0; j < arrStr[i].length; j++) {
            result[i].push(arrStr[i][j]);
        }
    }
    return result;
}
console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
