function stringToArray(str){
    let strSplit = str.split(',')
    let temp = []

    for (i=0;i<strSplit.length;i++) {
        temp.push([])
        for ( j=0;j<strSplit[i].length;j++) {
            temp[i].push(strSplit[i][j])
        }
    }
    return temp
}

console.log(stringToArray('aqrst,ukaei,ffooo'))

