function stringToArray(input){
    var pisah = input.split(',')
    var hasil = []
    for(let i = 0; i < pisah.length; i++){
        var temp = Array.from(pisah[i])
        hasil.push(temp)   
    }
    return hasil
}
console.log(stringToArray('aqrst,ukaei,ffoo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
