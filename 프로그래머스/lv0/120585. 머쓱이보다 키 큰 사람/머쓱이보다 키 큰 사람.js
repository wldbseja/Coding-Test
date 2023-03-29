//머쓱이보다 키 큰 사람 수의 값을 넣을 변수를 지정
//for문 이용하여 array배열의 i를 반복적으로 뽑아내서
//조건문으로 만약 i의 값이 height보다 크면,
//answer의 값을 하나씩 더해줌
//즉, answer의 값이 머쓱이보다 키 큰 사람의 수가 되므로 , answer를 리턴


function solution(array, height) {
    let answer = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]>height){
            answer++;
        }
    }
    return answer;
}