function solution(numbers) {
    // numbers 배열 요소 수에 맞게 dp 배열 생성, -1로 초기화
    const dp = Array(numbers.length).fill(-1);

    // 마지막 요소는 항상 -1로 설정
    dp[numbers.length - 1] = -1;

    // 뒤에서부터 dp 값을 업데이트하면서 최대값 찾기
    for (let i = numbers.length - 2; i >= 0; i--) {
        if (numbers[i] < numbers[i + 1]) {
            dp[i] = numbers[i + 1];
        } else {
            let j = i + 1;
            while (dp[j] !== -1) {
                if (numbers[i] < dp[j]) {
                    dp[i] = dp[j];
                    break;
                }
                j++;
            }
        }
    }

    // 만들어진 dp 배열 리턴
    return dp;
}