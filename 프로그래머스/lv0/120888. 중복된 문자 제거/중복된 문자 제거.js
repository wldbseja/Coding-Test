function solution(my_string) {
    const setArr = [...new Set(my_string)]
   return setArr.join('')
}