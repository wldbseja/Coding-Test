function solution(s) {
  const regex = /^[a-z|A-Z]+$/
     
  if (!( s.length === 4 || s.length === 6)) return false
    
   for(let i = 0; i < s.length; i++){
       if(regex.test(s[i]) ) return false
   }
    return true
}
