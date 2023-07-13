function solution(maps) {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    
    const n = maps.length;
    const m = maps[0].length;
    
    let visited = Array.from(Array(n), () => Array(m).fill(0));
    visited[0][0] = 1;
    
    let queue = [[0, 0]];
    
    while(queue.length > 0) {
        const [x, y] = queue.shift();
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
            
            if(maps[nx][ny] === 1 && visited[nx][ny] === 0) {
                visited[nx][ny] = visited[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    
    return visited[n-1][m-1] !== 0 ? visited[n-1][m-1] : -1;
}