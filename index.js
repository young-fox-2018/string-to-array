function stringToArray(input){
    let newArr = input.split(",")
    var result = []
    for(var i = 0 ; i < newArr.length; i++ ){
        let array = []
        for(var j = 0; j < newArr[i].length; j++){
            array.push(newArr[i][j])
        }

        result.push(array)
    }

    return result
}

console.log(stringToArray("aqrst,ukaei,ffooo"))
console.log(stringToArray("qwer,tyui,asdf,ghjk"))