function solution(rsp) {
    let numStr = ''
    for(let i = 0; i < rsp.length; i++){
        if(rsp[i] === "2") {
            numStr += "0"
        }
        if(rsp[i] === "0"){
            numStr += "5"
        }
        if(rsp[i] === "5"){
            numStr += "2"
        }
    }
    return numStr
}