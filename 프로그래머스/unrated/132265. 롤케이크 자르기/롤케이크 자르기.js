function solution(topping) {
  let answer = 0;
  
  // 모든 토핑의 개수를 저장하는 Map 객체 allTopping과
  // 남은 토핑의 종류를 저장하는 Set 객체 leftTopping 생성
  const allTopping = new Map();
  const leftTopping = new Set();
  
  // forEach() 메소드를 사용하여 토핑 배열을 순회하며
  // allTopping Map 객체에 각 토핑의 개수를 저장함
  topping.forEach(v => allTopping.set(v, (allTopping.get(v) || 0) + 1));
  
  // for...of 루프를 사용하여 토핑 배열을 순회함
  for (let value of topping) {
    // 남은 토핑의 종류를 추가함
    leftTopping.add(value);
    // allTopping Map 객체에서 현재 토핑의 개수를 1 감소시킴
    allTopping.set(value, allTopping.get(value) - 1);
    
    // 현재 토핑의 개수가 0이면 allTopping Map 객체에서 해당 토핑을 삭제함
    if (!allTopping.get(value)) allTopping.delete(value);
    
    // 모든 토핑을 사용했으면 answer 값을 1 증가시킴
    if (allTopping.size === leftTopping.size) answer++;
    
    // 남은 토핑의 종류보다 모든 토핑의 종류가 더 적으면 루프를 빠져나감
    if (allTopping.size < leftTopping.size) break;
  }
  
  return answer;
}