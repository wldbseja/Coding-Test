//<풀이>
//n의 각 자리 숫자의 합을 넣을 변수를 지정
//다른 변수에 n이 가지고 있는 값(숫자)들을 문자열로 만든다.
//for문 이용하여 반복적으로 i를 뽑아내서
//문자열로 변환된 i를 정수로 바꾼다음, answer와 더해줌
//즉, answer값이 n의 각 자리 숫자의 합이 되므로,answer를 리턴

function solution(n) {
    let answer = 0;
    let str = String(n);
    for(let i = 0; i < str.length; i++){
        answer += Number(str[i]);
    }
    return answer;
}
