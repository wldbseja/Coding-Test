function solution(numbers) {
    const dic = {
        one : 1,
        two : 2,
        three : 3,
        four : 4,
        five : 5,
        six : 6,
        seven : 7,
        eight : 8,
        nine : 9,
        zero : 0,
    }
    console.log(dic)
    
    let newStr = ''
    let newNum = ''
    for (let i = 0; i < numbers.length; i++){
        newStr += numbers[i]
        if (dic[newStr]){
            newNum += dic[newStr]
            newStr = ''
        }
        if (newStr === 'zero'){
            newNum += dic[newStr]
            newStr = ''
        }
    }
    return Number(newNum)
}