function solution(arrayA, arrayB) {
  let getGCD = (num1, num2) => {
    let gcd = 0;

    for (let i = 2; i <= Math.min(num1, num2); i++) {

      if (num1 % i === 0 && num2 % i > 0) {
        gcd = i;
      }else if (gcd > Math.min(num1, num2)){
          return 0
      }
    }

    return gcd;
  };
  let count = 0;
  for (let i = 0; i < arrayA.length; i++) {
    count = getGCD(arrayA[i], arrayB[i]);
  }
  return count;
}