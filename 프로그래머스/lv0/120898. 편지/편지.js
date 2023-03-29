//1.값만 리턴하는 방법
//문자열 한 자당 2cm크기로 변환한다 라고 했으니,값은 총 message길이에서 * 2 를 해준 값과 같다.

// function solution(message) {
//     return message.length * 2
// }


//2.for문 이용하여 값을 리턴한 방법
// 반복적으로 message문자열의 i를 뽑아냈을때, i의 길이가 1과 같으면 
//answer의 값을 + 2(한 자당 2cm 길이로 바꾼다고 생각,어차피 값으로 뽑아내야 하므로 )를 해줌
//값을 가지고 있는 answer를 리턴
function solution(message) {
    let answer = 0;
    for(let i = 0; i<message.length; i++){
        if (message[i].length === 1){
            answer+= 2;
        }
    }
    return answer;
}