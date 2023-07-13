function solution(maps) {
    let dx = [0, 0, -1, 1];
    let dy = [-1, 1, 0, 0];
    let queue = [[0, 0]];
    let visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(0));
    visited[0][0] = 1;
    while(queue.length !== 0) {
        let [x, y] = queue.shift();
        if (x === maps.length - 1 && y === maps[0].length - 1) { // 도착점에 도달했으면 종료
            return visited[x][y];
        }
        for(let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length) {
                if(maps[nx][ny] === 1 && visited[nx][ny] === 0) {
                    visited[nx][ny] = visited[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    return -1;
}