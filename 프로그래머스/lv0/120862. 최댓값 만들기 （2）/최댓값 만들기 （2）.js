function solution(numbers) {
    const maxSet = new Set()
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
                maxSet.add(numbers[i] * numbers[j])
        }
    }
    const max = Math.max(...maxSet)
    return max
}