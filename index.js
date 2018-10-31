function convertStringToArray(fullWords) {
    let wordsArr = fullWords.split(',')
    let strToArr = []

    for (let i = 0; i < wordsArr.length; i++) {
        insideArr = [];
        for (let j = 0; j < wordsArr[i].length; j++) {
            insideArr.push(wordsArr[i][j])
        }
        strToArr.push(insideArr)
    }
 
   return strToArr
}

console.log(convertStringToArray('qwer,tsadyui,asdf,ghjk'))