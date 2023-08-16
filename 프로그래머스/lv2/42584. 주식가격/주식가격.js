// 주식가격

function solution(prices) {
    const answer = new Array(prices.length).fill(0); // 결과를 저장할 배열 초기화

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] > prices[j]) { // 가격이 떨어진 경우
                answer[i] = j - i; // 시간 차 저장
                break;
            }
        }
        if (answer[i] === 0) {
            answer[i] = prices.length - 1 - i; // 끝까지 떨어지지 않은 경우
        }
    }

    return answer;
}