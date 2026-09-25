// 


function knightMoves(startArr, endArr) {
    // Bunch of checks for handlig wrong inputs
    if(!Array.isArray(startArr) || !Array.isArray(endArr)) throw new Error("Input coordinates must be arrays!")
    if(startArr.length !== 2 || endArr.length !== 2) throw new Error("Arrays must follow the pattern [x, y]")
    for(let value of startArr) {
        if(value < 0 || value > 7) throw new Error("Provide valid starting square coordinates!")
    }
    for(let value of endArr) {
        if(value < 0 || value > 7) throw new Error("Provide valid finish square cooridantes!")
    }

    //
}

knightMoves([0, 5], [])
console.log("Script finished")