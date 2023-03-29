function solution(box, n) {
    const arr = []
    for(let i = 0; i < box.length; i++){
        arr.push(Math.floor(box[i] / n))
    }
    return arr[0] * arr[1] * arr[2]
}

