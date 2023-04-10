function solution(k, tangerine) {
  const dic = {};
  for (let i = 0; i < tangerine.length; i++) {
    // 딕셔너리에 키 - 종류, 값 - 종류 개수 지정
    if (!dic[tangerine[i]]) dic[tangerine[i]] = 1;
    else dic[tangerine[i]]++;
  }

  // 중복값이 큰 순 - 딕셔너리 값만 빼서 내림차순으로 정렬
  arr = Object.values(dic).sort((a, b) => b - a);

  let count = 0;
  for (const mandarin of arr) {
    count++;
    // 귤개수가 K 보다 작으면  K에서 귤개수를 빼준다.
    if (mandarin < k) k -= mandarin;
    // 그렇지 않으면 끝낸다.
    else break;
  }
  return count;
}
