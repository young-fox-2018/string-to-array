
function stringToArray(str){

    let splittedWords = str.split(",");
    // console.log(splittedWords)
    let result = [];

    for(let i = 0; i < splittedWords.length; i++){
        result.push([]);
        for(let j = 0; j < splittedWords[i].length; j++){
            result[i].push(splittedWords[i][j]);
        }
    }
    return result
}
console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));