//문제:str1 안에 str2가 있다면 1을 없다면 2를 return
//<풀이>
//for문 이용하여 str1의 i와 , str2의 i를 하나씩 반복적으로 뽑아내서
//str1의 i와 , str2의 i를 비교한다.

function solution(str1, str2) {
    for(let i = 0; i < str1.length; i++){
        let result = true;
        for (let j = 0; j<str2.length; j++){
            if (str1[i+j] !== str2[j]){
                result = false;
            }     
        }  
        if (result){
            return 1;
        }
    } 
    return 2;
}

