//문제:my_string을 거꾸로 뒤집은 문자열을 return

//1.for문 사용한 방법
//거꾸로 뒤집은 문자열을 넣을 변수를 지정.
//for 반복문을 이용하여 my_string문자열을 거꾸로 출력하고
//출력이 될때마다 answer에 추가한다.
//문자열이 된 answer를 리턴

function solution(my_string) {
    let answer = '';
    for (let i = my_string.length -1;i >= 0; i--){
        answer += my_string[i];
    }
        
    return answer;
}
//2.다른 함수를 이용한 간편한 방법
// function solution(my_string){
// return my_string.split('').reverse().join('');
// }