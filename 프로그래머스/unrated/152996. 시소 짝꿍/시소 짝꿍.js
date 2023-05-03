// 탑승한 사람의 무게와 시소 축과 좌석 간의 거리의 곱이 양쪽 다 같다면 시소 짝꿍
// 시소는 중심으로부터 2(m), 3(m), 4(m) 거리의 지점에 좌석이 하나씩 있음

//  temp.set(calculate, cnt) 처음 temp에 value값을 몸무게에 대한 개수로 지정하는 이유
// 해당 무게 값이 원본 배열 weights에서 몇 번 나왔는지를 temp에 기록하기 위함

function solution(weights) {
  // 시소 짝꿍 몇개인지 세는 변수 선언
  let count = 0;
  // 각 거리 지점 point 배열로 만듦
  const point = [2, 3, 4];
  const map = new Map();
  const temp = new Map();

  weights.forEach((v) => {
    // map에 주어진 몸무게 없으면 key를 몸무게로 , value를 1로 지정
    if (!map.has(v)) {
      map.set(v, 1);
    } else {
      // 같은 값이 있다면 count에 각 몸무게 개수랑 더해줌
      // 각 몸무게에 대한 개수를 +1 해줌
      count += map.get(v);
      map.set(v, map.get(v) + 1);
    }
  });

  for (const [weight, cnt] of map) {
    for (const points of point) {
      // 몸무게에 point 배열 아이템들을 곱한 값(무게 * 거리)을 calculate에 저장
      const calculate = weight * points;

      // temp에 calculate 없으면 key를 곱한 값을 ,value에 몸무게에 대한 개수를 지정
      if (!temp.has(calculate)) {
        temp.set(calculate, cnt);
      } else {
        // calculate 있으면 count에 무게 * 거리에 대한 value 값 * 몸무게에 대한 개수를 곱한 값을 더해줌
        // temp에 곱한 값들에 대한 개수에 몸무게에 대한 개수를 더해줌
        count += temp.get(calculate) * cnt;
        temp.set(calculate, temp.get(calculate) + cnt);
      }
    }
  }

  return count;
}
// 예시 1번
// temp = {
//     200: 3,  // 100 * 2, 100 * 2, 100 * 2
//     300: 3,  // 100 * 3, 150 * 2
//     400: 1,  // 100 * 4
//     450: 2,  // 150 * 3
//     600: 1   // 150 * 4
//   }

