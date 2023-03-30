function solution(n) {
    const answer = n % 7
    if(answer > 0) return Math.floor(n / 7) +1
    
    return Math.floor(n / 7)
}