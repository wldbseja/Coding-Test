function solution(n, k) {
  const arr = [];
  const factorials = [1];
  
  for (let i = 1; i <= n; i++){
    arr.push(i);
    factorials.push(factorials[factorials.length - 1] * i);
  }
  
  const result = [];
  k--;
  
  for (let i = 1; i <= n; i++){
    const index = Math.floor(k / factorials[n - i]);
    result.push(arr[index]);
    arr.splice(index, 1);
    k -= index * factorials[n - i];
  }
  
  return result;
}