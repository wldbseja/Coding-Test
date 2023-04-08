function solution(n) {
    let answer = 0;
    for(let i = 0; i < n + 1; i++){
        if(n % i === 1){
          return i;
        }
    }
}