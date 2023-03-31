function solution(array) {
   const newArr = array.sort((a,b) => a - b)
   const middle = Math.floor(newArr.length / 2)
   return newArr[middle]
}