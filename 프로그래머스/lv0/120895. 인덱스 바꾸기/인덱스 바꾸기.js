function solution(my_string, num1, num2) {
    let str = ''
    for (let i = 0; i < my_string.length; i++){
        if (i === num1)  str += my_string[num2]
        else if (i === num2) str += my_string[num1]
        else str += my_string[i]
    }
    return str
}