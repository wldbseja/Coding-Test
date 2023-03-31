function solution(my_string) {
    const gather = ['a','e','i','o','u']
    
    let newStr = ''
    for (str of my_string){
        if (!gather.includes(str)) newStr += str
    }
    return newStr
}