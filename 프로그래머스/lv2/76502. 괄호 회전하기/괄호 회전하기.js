// 알맞은 연산자 조건에 따라 스택을 이용해 넣고 빼고를 반복하여
// (),[],{} -> 모두 있으면 stack 배열 길이가 0 이므로
// length에 따라 불리언 타입을 리턴하는 함수
function checkPermission(arr) {
  const stack = [];
  for (const str of arr) {
    if (str === ')' && stack[stack.length - 1] === '(') stack.pop();
    else if (str === ']' && stack[stack.length - 1] === '[') stack.pop();
    else if (str === '}' && stack[stack.length - 1] === '{') stack.pop();
    else stack.push(str);
  }

  return stack.length === 0 ? true : false;
}

function solution(s) {
  let strArr = s.split('');

  let count = 0;
  strArr.forEach((str) => {
    // 왼쪽으로 계속 회전시키는 방법 : strArr 배열의 맨 앞 요소를 빼서 맨 뒤에 넣어줌
    strArr.push(strArr.shift());
    // checkPermission 함수에서 받아온 값이 true 이면 , count 개수를 늘려줌
    if (checkPermission(strArr)) count++;
  });
  return count;
}
