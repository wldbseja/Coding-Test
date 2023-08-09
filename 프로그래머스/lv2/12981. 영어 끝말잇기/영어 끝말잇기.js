function solution(n, words) {
    let usedWords = [];  // 사용된 단어를 저장할 배열
    
    let currentPlayer = 1;  // 현재 단어를 말할 차례의 사용자 번호
    let turn = 1;  // 사용자의 몇 번째 차례인지 저장

    for (let i = 0; i < words.length; i++) {
        // 이전 단어와 현재 단어의 끝말잇기 조건을 확인
        if (i > 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
            return [currentPlayer, turn];
        }

        // 사용된 단어인지 확인
        if (usedWords.includes(words[i])) {
            return [currentPlayer, turn];
        }

        // 현재 단어를 사용된 단어 리스트에 추가
        usedWords.push(words[i]);

        // 다음 사용자로 넘어가기
        if (currentPlayer === n) {
            currentPlayer = 1;
            turn++;
        } else {
            currentPlayer++;
        }
    }

    return [0, 0];  // 문제 없이 게임을 마친 경우
}