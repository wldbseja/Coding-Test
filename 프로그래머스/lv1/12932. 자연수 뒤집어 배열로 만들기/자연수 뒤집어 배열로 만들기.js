//n에 들어있는 자연수를 문자열로 만들어 str변수에 넣는다.
//배열로 만들어야 하므로 , answer에 빈 배열을 지정
//for문 이용하여 str의 i를 거꾸로 한 글자씩 출력하면서
//answer의 빈 배열 안에 문자열에서 숫자로 바꿔준 str의 i를 하나씩 넣어줌
//이렇게 되면 거꾸로 출력된 숫자들이 배열로 되므로, answer를 리턴한다.

function solution(n) {
    let str = String(n);
    let answer = [];
    for(let i = str.length-1; i>=0; i--){
        answer.push(Number(str[i]));
    }
    return answer;
}