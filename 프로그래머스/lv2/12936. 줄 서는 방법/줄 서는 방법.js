function solution(n, k) {
    const factorial = [1]; // 0! = 1
    for (let i = 1; i <= n; i++) {
        factorial.push(factorial[i - 1] * i); // 1부터 n까지의 팩토리얼 값 구하기
    }
    
    const nums = Array.from({length: n}, (_, idx) => idx + 1); // 1부터 n까지의 수 배열 만들기
    const result = [];
    
    for (let i = n - 1; i >= 0; i--) {
        const q = Math.floor((k - 1) / factorial[i]);
        result.push(nums[q]);
        nums.splice(q, 1);
        k -= q * factorial[i];
    }
    
    return result;
}