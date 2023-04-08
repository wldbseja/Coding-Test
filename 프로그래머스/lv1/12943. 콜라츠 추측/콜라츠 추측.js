//몇번반복이 되었는지를 세는 변수를 지정
//n이 1이 되면 반복문 종료
//n이 짝수라면 2로 나눈다.
//n이 홀수라면 3을 곱하고 1을 더한다
//answer를 + 1씩 한다.
//1이 된다면 몇번 반복이 되어 1이 되었는지를 리턴

function solution(num) {
    let answer = 0;
    
    while(num != 1){
        if(num % 2 == 0){
            num = num / 2 
        }
        else{
            num = num * 3 + 1
        }
        answer += 1
    }

    if (answer > 500){
        return -1
    }
    return answer
}