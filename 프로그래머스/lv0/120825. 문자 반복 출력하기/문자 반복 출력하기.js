function solution(my_string, n) {
    let newStr = ''

    for (let i = 0; i < my_string.length; i++){
        newStr += my_string[i].repeat(n)
    }
    return newStr
}