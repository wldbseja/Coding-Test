function solution(numbers) {
    let newArr = numbers.sort((a,b)=> a - b)
    
    return newArr[newArr.length -2] * newArr[newArr.length -1]
}