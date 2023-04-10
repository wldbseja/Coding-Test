function solution(board) {
  const dic = { O: 0, X: 0 };
  board = board.join('').split('');
  for (item of board) {
    if (item !== '.') dic[item]++;
  }

  // x 개수가 o 개수 보다 작으면 실패
  // o가 x보다 2개 이상 크면 실패
  //   o -> x -> o -> x
  if (dic['O'] < dic['X'] || dic['O'] > dic['X'] + 1) return 0;

  const oFlag = checkPermission(board, 'O');
  const xFlag = checkPermission(board, 'X');

  // o 랑 x가 둘다 성공이면 실패
  if (oFlag && xFlag) return 0;
  // o가 성공일 때 x가 o랑 개수가 같거나 크면 실패
  else if (oFlag && dic['X'] >= dic['O']) return 0;
  // x가 성공일 때 o가 x보다 클 때 실패
  else if (xFlag && dic['O'] !== dic['X']) return 0;
  return 1;
}

function checkPermission(board, sign) {
  const coordinate = [
    // 가로
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // 세로
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // 대각선
    [0, 4, 8],
    [2, 4, 6],
  ];
  let flag = false;
  for ([a, b, c] of coordinate) {
    if (board[a] === sign && board[b] === sign && board[c] === sign)
      flag = true;
  }
  return flag;
}