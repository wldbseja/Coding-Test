// 연속 부분 수열 합의 개수 - lv2

function solution(elements) {
  const sequence = [...elements, ...elements];

  const set = new Set();
  for (let i = 0; i < sequence.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      if (
        sequence.slice(j, i, 1).length <= elements.length &&
        sequence.slice(j, i, 1).length !== 0
      ) {
        set.add(sequence.slice(j, i, 1).reduce((prev, curr) => prev + curr, 0));
      }
    }
  }
  result = Array.from(set);
  return result.length;
}