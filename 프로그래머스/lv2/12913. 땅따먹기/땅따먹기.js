function solution(land) {
  const dp = [...land];
  
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] += getMaxValue(dp[i - 1], j);
    }
  }
  
  return Math.max(...dp[dp.length - 1]);
}

function getMaxValue(row, exceptIndex) {
  let max = 0;
  for (let i = 0; i < row.length; i++) {
    if (i !== exceptIndex && row[i] > max) {
      max = row[i];
    }
  }
  return max;
}