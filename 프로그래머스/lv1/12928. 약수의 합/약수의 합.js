//for문 이용하여 1부터 n까지의 숫자를 반복적으로 뽑아준다.
//1부터 n까지 숫자 = i가 되므로 n과 i를 나눴을때 나머지값이 0이면 약수가 됨
//약수를 찾을때마다 answer에 i값을 더해줌
//모두 더하면 약수를 모두 더한 값이 됨
function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0)answer += i;
    }
    
    return answer;
}