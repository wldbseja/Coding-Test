const [T, ...number] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
solution(T, number);

function solution(T, number) {
    // dp 배열 초기화
    const dp = new Array(11).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    // 4부터 10까지의 경우에 대한 dp 배열 채우기
    for (let i = 4; i < 11; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    // 테스트 케이스에 대해 결과 출력
    for (let i = 0; i < T; i++) {
        console.log(dp[number[i]]);
    }
}

