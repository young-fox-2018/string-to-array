function stringToArray(str) {
    var arrString = str.split(',');
    var resultArr = [];

    for (let i = 0; i < arrString.length; i++) {
        let baris = [];
        for (let j = 0; j < arrString[i].length; j++) {
            baris.push(arrString[i][j]);
        }
        resultArr.push(baris);
    }

    return resultArr;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));