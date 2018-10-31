function stringArray(str){
    let newStr = str.split(",")
    for(let i = 0; i < newStr.length; i++){
        newStr[i] = newStr[i].split("")
    }
    return newStr
}

console.log(stringArray("aqrst,ukaei,ffooo"))
console.log(stringArray("qwer,tyui,asdf,ghjk"))