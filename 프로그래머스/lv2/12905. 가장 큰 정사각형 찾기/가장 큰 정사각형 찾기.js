function solution(board) {
  const rows = board.length;
  const cols = board[0].length;
  let maxSquareSize = 0;

  // 1x1 배열인 경우에 대한 예외 처리
  if (rows === 1 && cols === 1) {
    return board[0][0];
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (board[i][j] === 1) {
        board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
        maxSquareSize = Math.max(maxSquareSize, board[i][j]);
      }
    }
  }

  return maxSquareSize * maxSquareSize;
}