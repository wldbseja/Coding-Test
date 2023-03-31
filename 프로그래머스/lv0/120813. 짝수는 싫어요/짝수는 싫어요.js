function solution(n) {
    const oddNum = []
    for (let i = 1; i < n + 1; i++){
        if (i % 2 === 1) oddNum.push(i)
    }
    return oddNum
}