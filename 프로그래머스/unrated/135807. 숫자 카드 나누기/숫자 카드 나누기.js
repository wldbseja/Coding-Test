function solution(arrayA, arrayB) {
  let answer = 0;
  let numMin1 = arrayA[0];
  let numMin2 = arrayB[0];
  for (let i = 0; i < arrayA.length; i++) {
    numMin1 = getMax(numMin1, arrayA[i]);
    numMin2 = getMax(numMin2, arrayB[i]);
  }
  if (notDivisible(arrayB, numMin1)) {
    if (answer < numMin1) {
      answer = numMin1;
    }
  }
  if (notDivisible(arrayA, numMin2)) {
    if (answer < numMin2) {
      answer = numMin2;
    }
  }
  return answer;
}
const getMax = (a, b) => {
  if (a % b == 0) return b;
  return getMax(b, a % b);
};
const notDivisible = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % num === 0) {
      return false;
    }
  }
  return true;
};