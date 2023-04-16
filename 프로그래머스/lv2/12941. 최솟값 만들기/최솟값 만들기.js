function solution(A,B){
    const Bsort = B.sort((a,b)=>b-a);
    return A.sort((a,b)=>a-b).reduce((acc,cur,index)=> acc +=cur*Bsort[index],0)
}