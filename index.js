function stringToArray(input){
    let result = []
    let arrInput = input.split(",")

    for(let i=0 ; i<arrInput.length ; i++){
        let arrTemp = []
        for(let j=0 ; j<arrInput[i].length ; j++){
            arrTemp.push(arrInput[i][j])
        }

        result.push(arrTemp)
    }
    // console.log(result)
    return result
}

console.log(stringToArray("aqrst,ukaei,ffooo"))
console.log(stringToArray("qwer,tyui,asdf,ghjk"))