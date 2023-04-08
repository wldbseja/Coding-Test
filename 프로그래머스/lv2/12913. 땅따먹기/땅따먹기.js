// dp : 문제를 작은 부분 문제로 나누어 푸는 방법
function solution(land) {
  // land 배열 복사해서 dp 배열 저장
  const dp = [...land];
  
  // 두번째 행 부터 마지막 행까지 getMaxValue 함수에 보내서 받은 max 값을 받아서 누적 계산
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      // getMaxValue -> 이전 행에서 선택한 열을 제외한 나머지 열 중에서 최대값을 찾아와서 현재 요소에 더해줌
      dp[i][j] += getMaxValue(dp[i - 1], j);
    }
  }
  // dp 배열의 마지막 행에서 최대값을 찾아 반환
  return Math.max(...dp[dp.length - 1]);
}
// 현재 칸을 제외한 이전 행에서의 최대값 구하는 함수
function getMaxValue(row, exceptIndex) {
  let max = 0;
  for (let i = 0; i < row.length; i++) {
    // 현재 칸이 아니면서, i번째 칸의 값이 현재까지 찾은 최대 값 보다 크다면 최대 값을 갱신
    if (i !== exceptIndex && row[i] > max) {
      max = row[i];
    }
  }
  // 최대 값 리턴
  return max;
}