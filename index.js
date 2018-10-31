function strToArr(str){
    csv = str.split(",");
    result = [];

    for(var i = 0; i < csv.length; i++){
        cont =[];
        for(var j = 0; j < csv[i].length; j++){
            cont.push(csv[i][j]);
        }
        result.push(cont)
    }




    return result;
}


console.log(strToArr("qwer,tyui,asdf,ghjk"))
console.log(strToArr("aqrst,ukaei,ffooo"))