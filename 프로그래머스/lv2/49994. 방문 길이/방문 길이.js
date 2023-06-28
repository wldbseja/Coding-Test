function solution(dirs) {
    dirs = dirs.split('');
    const dic = {
        U: [0, -1],
        D: [0, 1],
        L: [-1, 0],
        R: [1, 0],
    };
    const visited = new Set(); // 방문한 좌표를 저장하는 Set
    let count = 0;
    let x = 0; // 시작 위치 x 좌표
    let y = 0; // 시작 위치 y 좌표

    for (let i = 0; i < dirs.length; i++) {
        const [dx, dy] = dic[dirs[i]];
        const nx = x + dx;
        const ny = y + dy;
        const key1 = `${x},${y},${nx},${ny}`; // 현재 위치에서 다음 위치로의 키
        const key2 = `${nx},${ny},${x},${y}`; // 다음 위치에서 현재 위치로의 키
        
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
            // 범위를 벗어나는 경우, 무시하고 다음 명령어로 넘어감
            continue;
        }

        if (!visited.has(key1) && !visited.has(key2)) {
            // 처음 방문하는 경로라면
            visited.add(key1);
            visited.add(key2);
            count++;
        }

        x = nx;
        y = ny;
    }

    return count;
}