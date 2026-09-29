export function knightMoves(startArr = [0,0], endArr = [1,2]) {
    const startingSquare = startArr;
    const finishSquare = endArr;
    // Direction vectors
    const DC = [1, 2, 2, 1, -1, -2, -2, -1] // x axis
    const DR = [2, 1, -1, -2, -2, -1, 1, 2] // y axis
    // Number of rows, columns on a chessboard
    const R = 8
    const C = 8
    // R x C matrix of false values used to track whether a particular tile has been visited yet
    let visited = []
    for(let i = 0; i < R; i++){
        visited.push([])
        for(let j = 0; j < C; j++) {
            visited[i].push(false)
        }
    };
    //Similarly a R x C matrix of null values to track the "parent" node of each visited node (aka from where the Knight jumped to get to current tile)
    let prev = []
    for(let i = 0; i < R; i++){
        prev.push([])
        for(let j = 0; j < C; j++) {
            prev[i].push(null)
        }
    };

    let queue = [];
    function searchPossibleJumps(currentNode) {
        for(let i = 0; i < DC.length; i++) {
            // new node
            const newNode = [currentNode[0] + DC[i], currentNode[1] + DR[i]]
            // Check newly created node fits within chessboard
            if(newNode[0] < 0 || newNode[1] < 0) {
                continue;
            }
            if(newNode[0] > 7 || newNode[1] > 7) {
                continue
            }
            if(visited[newNode[0]][newNode[1]]){
                continue
            }
            queue.push(newNode)
            visited[newNode[0]][newNode[1]] = true;
            prev[newNode[0]][newNode[1]] = currentNode;
        }
    };

    function solve(start) {
        queue.push(start)
        visited[start[0]][start[1]] = true;
        let tracker = 0
        while(queue[tracker]) {
            const currentSquare = queue[tracker]
            // check if we found the finish square
            if(currentSquare[0] === finishSquare[0] && currentSquare[1] === finishSquare[1]) {
                
                return
            }
            searchPossibleJumps(currentSquare)
            tracker++
        }
    };

    function reconstructPath() {
        let path = [];
        for(let at = finishSquare; at !== null; at = prev[at[0]][at[1]]) {
            path.push(at)
        }
        return path
    }
    solve(startingSquare)

    const correctPath = reconstructPath().reverse()
    console.log(`You made it in ${correctPath.length - 1} moves! Here's your path:`);
            correctPath.forEach(square => console.log(square));
}



