function solution(money) {
    const penny = money % 5500
   
    return [Math.floor(money / 5500),penny]
}