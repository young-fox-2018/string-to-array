function stringToArray(str) {
    let newStr = str.split(",")
    let result = []
    let arrTemp = []

    for (let i = 0; i < newStr.length; i++) {
        for (let j = 0; j < newStr[i].length; j++) {
            arrTemp.push(newStr[i][j])
        }
        result.push(arrTemp)
        arrTemp = []
        
    }

    return result
    
}

let text = "iawdn,awdks,lakwdj,awkdx"

console.log(stringToArray(text));
