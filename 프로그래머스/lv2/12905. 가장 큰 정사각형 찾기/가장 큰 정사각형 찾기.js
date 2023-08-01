function solution(board) {
  const rows = board.length;
  const cols = board[0].length;
  let maxSquareSize = 0;

  // 주어진 좌표의 값으로부터 가장 큰 정사각형의 한 변의 길이를 계산하는 함수
  function calculateSquareSize(x, y) {
    if (x === 0 || y === 0 || board[x][y] === 0) {
      return board[x][y];
    }

    const minSize = Math.min(
      board[x - 1][y],
      board[x][y - 1],
      board[x - 1][y - 1]
    );

    return minSize + 1;
  }

  // 2차원 배열을 순회하면서 가장 큰 정사각형의 한 변의 길이를 찾음
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 1) {
        board[i][j] = calculateSquareSize(i, j);
        maxSquareSize = Math.max(maxSquareSize, board[i][j]);
      }
    }
  }

  return maxSquareSize * maxSquareSize;
}