var input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number);

// 포문 30까지 돌려서 입력으로 받은 숫자안에 i가 없으면
// i를 다른 배열안에 넣는다.

function findNumberOneArray(input) {
  let numberArray = [];

  for (let i = 1; i <= 30; i++) {
    if (!input.includes(i)) {
      numberArray.push(i);
    }
  }
  console.log(Math.min(...numberArray));
  console.log(Math.max(...numberArray));
}
findNumberOneArray(input);