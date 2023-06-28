function solution(dirs) {
  dirs = dirs.split('');
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const dic = {
    U: 0,
    R: 1,
    D: 2,
    L: 3
  };
  const map = Array.from(Array(11), () =>
  Array(11).fill(0).map(() => Array(4).fill(false))
  );
  let answer = 0;
  let x = 5; // 시작 위치 x 좌표
  let y = 5; // 시작 위치 y 좌표

  for (let i = 0; i < dirs.length; i++) {
    const direction = dic[dirs[i]];
    const nx = x + dx[direction];
    const ny = y + dy[direction];

    if (nx < 0 || nx > 10 || ny < 0 || ny > 10) {
      // 범위를 벗어나는 경우, 무시하고 다음 명령어로 넘어감
      continue;
    }

    if (!map[x][y][direction]) {
      // 처음 방문하는 경로라면
      map[x][y][direction] = true;
      map[nx][ny][(direction + 2) % 4] = true;
      answer++;
    }

    x = nx;
    y = ny;
  }

  return answer;
}