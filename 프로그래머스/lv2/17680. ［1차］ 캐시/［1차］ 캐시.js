//cache hit : 해당 데이터가 캐시 되어있음
// cache miss : 해당 데이터가 캐시에 없음
// cache : 데이터를 임시로 저장하는 임시 저장소의 개념
// LRU Cache :
// 1.해당 데이터가 메모리에 캐시 되어있는지 확인
// 2.해당 데이터가 hit 되어있다면 캐시된 데이터 제공, miss면 DB에서 데이터 조회하여 제공, 해당 데이터는 메모리에 캐시함
// 3.캐시에 사용되는 메모리 크기는 제한되며,제한된 리소스 안에서만 데이터 저장,접근
// 4.메모리가 가득 차고 새롭게 캐시해야 할 데이터가 나오면 이미 존재하는 데이터와 교체(가장 오래된 데이터 교체)

//  - 초기 설정 -
// cache : 임시 저장소 역할
// count : 실행 시간 역할

function solution(cacheSize, cities) {
  const cache = [];
  let count = 0;

  // 캐시 크기가 0인 경우 모든 값이 cache miss 이므로 cities.length * 실행시간 : 5 해줌
  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((c) => {
    // 대소문자 구분을 하지 않으므로, cities 아이템들을 모두 소문자로 바꿔줌
    const convert = c.toLowerCase();

    // cache hit 일때 : 동일한 요소 자르기
    if (cache.includes(convert)) {
      count += 1;
      cache.splice(cache.indexOf(convert), 1);

      // hit 아닐 때 , 캐시가 가득 찼을 때 : 가장 오래된 데이터가 배열 맨 뒤에 있으므로 pop 으로 빼기
    } else if (cache.length === cacheSize) {
      count += 5;
      cache.pop(convert);

      // cache miss 일때 : count + 5
    } else {
      count += 5;
    }

    // 새로운 데이터를 cache 배열 맨 앞으로 넣기
    cache.unshift(convert);
  });

  return count;
}