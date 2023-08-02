// function solution(board) {
//   // 행 개수
//   const rows = board.length;
    
//   // 열 개수
//   const cols = board[0].length;
    
//   // 가장 큰 정사각형 한 변의 길이
//   let maxSquareSize = 0;

//   // 1x1 배열인 경우에 대한 예외 처리
//   if (rows === 1 && cols === 1) {
//     return board[0][0];
//   }

//   for (let i = 1; i < rows; i++) {
//     for (let j = 1; j < cols; j++) {
        
//       if (board[i][j] === 1) {
//           console.log(board)
//         board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
//         maxSquareSize = Math.max(maxSquareSize, board[i][j]);
//       }
//     }
//   }

//   return maxSquareSize * maxSquareSize;
// }


function solution(board) {
    let n = board.length;
  let m = board[0].length;
  let dp = [...Array(n)].map(() => Array(m).fill(0));
  let maxSquare = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        maxSquare = Math.max(maxSquare, dp[i][j]);
      }
    }
  }

  return maxSquare ** 2;
}