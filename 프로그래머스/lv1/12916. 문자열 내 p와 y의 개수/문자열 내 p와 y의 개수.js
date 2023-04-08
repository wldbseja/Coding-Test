//for문 이용하여 반복적으로 s문자열의 원소를 꺼내서
//if조건문으로 소문자,대문자 'p'가 있으면 1변수를 +1 해줌
//if조건문으로 소문자,대문자 'y'의 개수를 2변수를 +1 해줌
//1변수와 2변수의 값을 비교하여 같으면 true,다르면 false를 리턴

function solution(s){
    let countP = 0;
    let countY = 0;
    for(let i =0; i < s.length; i++){
        if(s[i] ==='p' || s[i] ==='P') countP ++; 
        if(s[i] ==='y' || s[i] ==='Y') countY ++;
    }  
    return countP === countY ? true : false;
}