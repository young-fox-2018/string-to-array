function stringArray(str){
    let result = []
    let newStr = str.split(",")
    for(let i = 0; i < newStr.length; i++){
        let arr = []
        let string = newStr[i].split("")
        let limit = newStr[i].length
        for(let j = 0; j < limit; j++){
            arr.push(string[j])
        }
        result.push(arr)
    }
    return result
}

console.log(stringArray("aqrst,ukaei,ffooo"))
console.log(stringArray("qwer,tyui,asdf,ghjk"))