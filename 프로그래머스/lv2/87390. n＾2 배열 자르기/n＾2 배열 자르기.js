// function solution(n, left, right) {
//     const arr = [];
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             arr.push(Math.max(i, j) + 1);
//         }
//     }
//     return arr.slice(left, right + 1);
// }

function solution(n, left, right){
    const answer = [];

    for (let i = left; i <= right; i++) { // left부터 right까지 반복
        const row = Math.floor(i / n);  // i가 위치한 행 계산
        const col = i % n;  // i가 위치한 열 계산
        answer.push(Math.max(row, col) + 1); // (row, col) 중 더 큰 값에 1을 더한 값 추가
       
    }

    return answer;
}