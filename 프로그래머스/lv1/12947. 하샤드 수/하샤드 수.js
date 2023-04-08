//x를 문자열로 만들고
//for 문 이용하여 문자열에서 한 글자씩 뽑고
//뽑은 글자들을 answer에 정수로 만들어 하나씩 더해줌
//x를 answer로 나눴을때 나머지값이 0이면 true & false가 되는 리턴

function solution(x) {
    let answer = 0;
    let str = String(x)
    for(let i =0; i < str.length; i++){
        answer += Number(str[i]);
    }
    return x % answer === 0 ;
}