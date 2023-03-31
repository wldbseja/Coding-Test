function solution(my_string) {
    let newStr = ''
    for(str of my_string){
        if(str === str.toLowerCase()) newStr += str.toUpperCase()
        else newStr += str.toLowerCase()
        
    }
    return newStr
}