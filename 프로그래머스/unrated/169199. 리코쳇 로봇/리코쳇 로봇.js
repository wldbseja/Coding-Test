// 리코쳇 로봇 - lv2

// 이것은 BFS .. R에서 최소 몇번만에 G까지 도달할 수 있느냐를 리턴해야됨;
// 중요한건 상하좌우를 탐색하는데 이동할 때 배열의 끝,장애물을 만날 때 다시 이동이 간응하다는 점
// board 배열을 2중배열로 만든다.
// getStart 함수로 board로 보내서 start(R) 좌표 지점을 찾아서 리턴
// BFS 함수로 시작지점 좌표를 보낸다.
// queue 배열을 만들고 start 좌표를 객체형식으로 넣어준다.
// board 배열에서 start지점인 R을 . 으로 만들어서 표시함
// while문 queue배열 길이만큼 돌린다.
// 상하좌우 이동은 set을 이용해서 y좌표와 x좌표를 넣으면서 중복되는 것이 있는지 체크하면서 중복이 아닐 때만 set에 넣으면서
// 좌표가 배열 끝이 아닐 때, 장애물을 만나지 않았을 때를 확인하여 이동한다.
// 이동을 마치면 D 아니면 배열 끝 부분이기 때문에 queue에는 이동하기 전의 좌표와 count 수를 +1 해서 넣는다.
// 또한 이동을 마쳤을 때 G의 위치라면 카운트 수를 리턴한다.
// 만약 while문이 다 끝났을 때 G에 도달하지 못한다면 while문 밖에 -1을 리턴한다.
// solution 함수에서는 bfs 함수에서 받아온 count 값을 리턴한다.

function solution(board) {
  board = board.map((b) => b.split(''));

  const start = getStart(board);
  const count = bfs(start, board);

  return count;
}

// 시작 지점 R 찾아서 좌표 리턴
getStart = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'R') {
        return { y: i, x: j };
      }
    }
  }
};

bfs = (start, board) => {
  const isVisit = new Set();

  const isValid = (y, x) => {
    return (
      y >= 0 &&
      y < board.length &&
      x >= 0 &&
      x < board[0].length &&
      board[y][x] !== 'D'
    );
  };

  const dydx = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];

  const queue = [{ ...start, count: 0 }];
  let queueIndex = 0;
  board[start.y][start.x] = '.';

  while (queue.length > queueIndex) {
    const node = queue[queueIndex++];

    const position = `${node.y}_${node.x}`;

    if (isVisit.has(position)) {
      continue;
    }
    isVisit.add(position);

    if (board[node.y][node.x] === 'G') {
      return node.count;
    }
    for (let i = 0; i < dydx.length; i++) {
      let ny = node.y + dydx[i][0];
      let nx = node.x + dydx[i][1];

      while (isValid(ny, nx)) {
        ny += dydx[i][0];
        nx += dydx[i][1];
      }

      queue.push({
        x: nx - dydx[i][1],
        y: ny - dydx[i][0],
        count: node.count + 1,
      });
    }
  }
  return -1;
};