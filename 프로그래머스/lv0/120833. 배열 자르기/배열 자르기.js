//문제:numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return
//<풀이>
//for문 이용하여 num1의 i가 num2의 i와 같거나 작을때까지 반복적으로 뽑아내면
//numbers의 인덱스가 num1부터 num2까지의 위치의 값을 뽑아낸다.
//answer변수에 배열의 원소를 뒷자리부터 넣어주는 push함수 사용하여 numbers의 i를 넣어준다.

function solution(numbers, num1, num2) {
    let answer = [];
    for(i = num1;i<=num2;i++){
        answer.push(numbers[i]);
    }
    return answer;
}