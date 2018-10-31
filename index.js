function stringArray(data){
  var pisah = data.split(',')
  var result = []

  for(var i = 0 ; i < pisah.length ; i++){
    var arr = []

    for(var j = 0 ; j < pisah[i].length ; j++){
      arr.push(pisah[i][j])
    }
    result.push(arr)
  }

  return result
}


console.log(stringArray('aqrst,ukaei,ffooo'));
console.log(stringArray('qwer,tyui,asdf,ghjk'))