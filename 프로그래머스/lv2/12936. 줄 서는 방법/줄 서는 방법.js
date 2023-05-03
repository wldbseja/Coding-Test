function solution(n, k) {
    const factorial = [1]; // 0! = 1
    for (let i = 1; i <= n; i++) {
        factorial.push(factorial[i - 1] * i); // 1부터 n까지의 팩토리얼 값 구하기
    }
    
    const nums = Array.from({length: n}, (_, idx) => idx + 1); // 1부터 n까지의 수 배열 만들기
    const result = [];
    
    const getPermutation = (n, k, nums, result) => {
        if (n === 0) return result; // 기저조건: 모든 자리수를 채웠을 때
        const q = Math.floor((k - 1) / factorial[n - 1]);
        result.push(nums[q]);
        nums.splice(q, 1);
        return getPermutation(n - 1, k - q * factorial[n - 1], nums, result);
    };
    
    return getPermutation(n, k, nums, result);
}