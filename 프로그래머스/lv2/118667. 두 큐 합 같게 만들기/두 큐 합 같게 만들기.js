function solution(queue1, queue2) {
  const merge = [...queue1, ...queue2];
  let q1 = queue1.reduce((a, b) => a + b);
  let q2 = queue2.reduce((a, b) => a + b);

  // 배열 2개 안의 요소들 모두 합한 값 : 20
  const t_sum = merge.reduce((a, b) => a + b);
  // 만들어야 할 기준 숫자 : 10
  const point = t_sum / 2;

  let start = 0;
  let end = merge.length / 2;

  let cnt = 0;
  while (cnt <= merge.length * 2) {
    if (point === q1) {
      return cnt;
    } else if (point > q1) {
      q1 += merge[end];
      end++;
    } else {
      q1 -= merge[start];
      start++;
    }

    cnt++;
  }

  return -1;
}