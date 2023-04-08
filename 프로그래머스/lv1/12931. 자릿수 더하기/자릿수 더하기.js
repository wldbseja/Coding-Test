//각 자릿수의 합을 구한 값을 넣을 answer변수를 지정
//str변수를 n을 문자열로 만들어낸 값을 넣어주고
//for문을 이용하여 문자열이 된 str의 한글자씩을 반복적으로 뽑아내어
//answer에 문자열인 str의 i 값을 숫자로 만들어서 i값을 하나씩 더해준다.
//각 자릿수의 합이 된 answer를 리턴

function solution(n){
    let answer = 0;
    let str = String(n);
    for (i = 0; i < str.length; i++){
        answer += Number(str[i]);
    }
    return answer;
}