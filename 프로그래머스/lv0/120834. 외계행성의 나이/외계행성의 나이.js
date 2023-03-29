/*
[풀이]
알파벳 a부터 j까지 딕셔너리 키로,값은 1부터 9까지 정한다.
age를 문자열로 만들고 글자하나씩 쪼개준다.
포문으로 age의 i와 딕셔너리 값을 비교해서 
같으면 딕셔너리 키를 conversiond에 하나씩 더해준다.
*/
function solution(age) {
    let conversion =""
    let english ={ "0":"a",
                   "1":"b",
                   "2":"c",
                   "3":"d",
                   "4":"e",
                   "5":"f",
                   "6":"g",
                   "7":"h",
                   "8":"i",
                   "9":"j" }
    let answer = String(age).split("")
    for(let i = 0; i<answer.length;i++){
        conversion += english[answer[i]]    
    }
    return conversion
}