//for문을 이용하여 i를 n번만큼 반복하여 뽑아서
//answer변수의 빈 배열안에 x+(x*i)를 배열의 맨 뒤부터 순차적으로 넣어줌

function solution(x, n) {
    let answer = [];
    for(let i = 0; i < n; i++){
        answer.push(x + x * i)
    }
    return answer;
}