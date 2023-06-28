function solution(dirs) {
  dirs = dirs.split('');
  const dic = {
    U: [0, -1],
    R: [1, 0],
    D: [0, 1],
    L: [-1, 0]
  };
  const visited = Array.from(Array(11), () => Array(11).fill(false));
  let answer = 0;
  let x = 5; // 시작 위치 x 좌표
  let y = 5; // 시작 위치 y 좌표

  for (let i = 0; i < dirs.length; i++) {
    const [dx, dy] = dic[dirs[i]];
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || nx > 10 || ny < 0 || ny > 10) {
      // 범위를 벗어나는 경우, 무시하고 다음 명령어로 넘어감
      continue;
    }

    if (!visited[nx][ny]) {
      // 처음 방문하는 경로라면
      visited[nx][ny] = true;
      visited[x][y] = true; // 현재 위치에서 다음 위치로의 방문 체크
      answer++;
    } else if (!visited[x][y]) {
      // 이미 방문한 경로라면, 현재 위치에서 다음 위치로의 방문 체크
      visited[x][y] = true;
      answer++;
    }

    x = nx;
    y = ny;
  }

  return answer;
}