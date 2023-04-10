function solution(s) {
  const stack = [];
  for (str of s) {
    stack.push(str);
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
}