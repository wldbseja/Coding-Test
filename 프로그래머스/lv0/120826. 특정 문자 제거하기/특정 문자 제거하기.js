function solution(my_string, letter) {
    
    const strArr = []
    for(let i = 0; i < my_string.length; i++){
        if(my_string[i] !== letter){
            strArr.push(my_string[i])
        }
    }
 return strArr.join('')
}
