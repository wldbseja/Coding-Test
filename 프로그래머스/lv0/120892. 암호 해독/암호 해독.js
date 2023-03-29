function solution(cipher, code) {
    let str = ''
    for(let i = 1; i < cipher.length+1; i++){
        if(i % code ===0){
            str += cipher[i-1]
        }
    }
    return str
}