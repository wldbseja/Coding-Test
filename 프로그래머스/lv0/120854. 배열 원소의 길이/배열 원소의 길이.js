//<풀이>
//for문을 이용하여 strlist배열안의 문자열 원소들을 하나씩 꺼내서
//원소들이 한번씩 나올때 마다 원소의 길이를 answer에 넣는다.

function solution(strlist) {
    let answer = [];
    for(let i = 0;i < strlist.length;i++){
    answer.push(strlist[i].length);
    }
    return answer;
}
