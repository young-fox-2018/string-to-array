function stringToarray(str) {
    let output = []
    for (let i = 0; i < str.split(",").length; i++) output.push(str.split(",")[i].split("")) 
    return output
}

// test case
console.log(stringToarray("aqrst,ukaei,ffooo"))
