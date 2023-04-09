function solution(before, after) {
    before = before.split('').sort().join('')
    after = after.split('').sort().join('')

    if (before === after) return 1
    return 0
}