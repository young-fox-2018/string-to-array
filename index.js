function Str2Array(str){
    str = str.split(",")
    for(var i = 0 ; i < str.length ; i++){
        str[i] = str[i].split("")
    }
    return str
}

console.log(Str2Array("aqrst,ukaei,ffooo"));
console.log(Str2Array("qwer,tyui,asdf,ghjk"));