function solution(my_string) {
    // 정규식 사용
    const regex =  /[^0-9]/g
    const newStr = my_string.replace(regex, "")
    let sum = 0
    for(num of newStr){
        sum += Number(num)
    }
    return sum
}