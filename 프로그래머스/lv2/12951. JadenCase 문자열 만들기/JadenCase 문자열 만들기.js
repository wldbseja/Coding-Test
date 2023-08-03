function solution(s) {
    s = s.toLowerCase().split(' ')

    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].substr(0, 1).toUpperCase() + s[i].substr(1)

    }

    return s.join(' ')

}