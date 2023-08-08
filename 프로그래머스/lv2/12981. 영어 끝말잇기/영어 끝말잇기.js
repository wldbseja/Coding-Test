function solution(n, words) {
    let usedWords = new Set();
    
    usedWords.add(words[0]);
    for (let i = 1; i < words.length; i++) {
        // 조건 2: 마지막 글자와 첫 글자가 같아야 한다.
        if (words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0)) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        // 조건 3: 이전에 사용된 단어는 사용할 수 없다.
        if (usedWords.has(words[i])) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        usedWords.add(words[i]);
    }
    
    // 문제 없이 끝난 경우
    return [0, 0];
}