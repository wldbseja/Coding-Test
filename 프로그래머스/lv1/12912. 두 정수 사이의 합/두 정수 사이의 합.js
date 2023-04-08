//a와 b 사이에 속한 모든 정수의 합을 넣을 변수를 지정
//조건문 사용하여 a가 b랑 같거나 크면 for 문 사용하여 a에서 부터 b 까지의 숫자를 반복적으로 뽑아서
//i와 answer를 더해줌(a와 b사이의 숫자까지 포함하여 더하면 모든 정수의 합을 가지게 됨)
//b가 a보다 클 경우에도 똑같이 해줌
//answer를 리턴

function solution(a, b) {
    let answer = 0;
    if(a >= b){
        for(let i = b; i <= a; i++){
            answer += i;
        }
    }else{
        for(let j = a; j <= b; j++){
            answer += j;
        }
    }
    return answer;
}