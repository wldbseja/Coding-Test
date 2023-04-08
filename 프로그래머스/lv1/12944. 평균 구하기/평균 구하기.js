//for문 이용하여 arr의 원소들을 하나씩 꺼내어
//answer에 i 를 더해준다.(answer값은 배열의 모든 원소들의 합이 됨)
//answer와 arr 배열의 길이를 나누어 주면 arr 평균 값이 되므로,리턴

function solution(arr) {
    let answer = 0;
    for (let i = 0;i < arr.length;i++){
        answer += arr[i];
    }
    return answer/arr.length;
}