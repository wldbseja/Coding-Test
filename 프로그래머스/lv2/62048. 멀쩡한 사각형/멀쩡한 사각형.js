function solution(w, h) {
    return w * h - w - h  +gcd(w,h)
}

function gcd(a,b){
    return a == 0 ? b : gcd((b%a),a)
}