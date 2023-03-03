function solution(board) {
    // 안전지역
    // 3, 2  => 3-1, (1,2,3)   / 3+1, (1,2,3) / 3, (1,3)
    var answer = 0;
    for(let i = 0; i < board.length ; i++) {
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === 1) {
                board[i][j-1] !== 1 ? board[i][j-1] = 'x' : null;
                board[i][j+1] !== 1 ? board[i][j+1] = 'x' : null;
                if(board[i+1]){
                    board[i+1][j] !== 1 ? board[i+1][j] = 'x' : null;
                    board[i+1][j-1] !== 1 ? board[i+1][j-1] = 'x' : null;
                    board[i+1][j+1] !== 1 ? board[i+1][j+1] = 'x' : null;
                }
                if(board[i-1]){
                    board[i-1][j] !== 1 ? board[i-1][j] = 'x' : null;
                    board[i-1][j-1] !== 1 ? board[i-1][j-1] = 'x' : null;
                    board[i-1][j+1] !== 1 ? board[i-1][j+1] = 'x' : null;
                }
            }
        }
    }
    answer = board.flat().filter(el => el === 0).length
    return answer;
}