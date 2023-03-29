//<풀이>
//뒤집은 배열의 원소를 넣을 변수answer 지정
//for문 이용하여 num_list 배열의 원소들을 하나씩 거꾸로 뽑는다.
//answer변수에 배열의 맨 뒤에서부터 하나씩 추가할수 있는 함수push를 사용하여 거꾸로 뽑은 원소들을 넣는다.

function solution(num_list) {
    let answer = [];
    for(let i = num_list.length-1; i>=0; i--){
        answer.push(num_list[i]);
    }
    return answer;
}