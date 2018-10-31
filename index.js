function stringToArray(str) {
  var strArray = str.split(",")
  var result = []
  for (let i = 0; i < strArray.length; i++) {
    var array = []
    for (let j = 0; j < strArray[i].length; j++) {
      array.push(strArray[i][j])
    }
    result.push(array)
  }
  return result
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));
