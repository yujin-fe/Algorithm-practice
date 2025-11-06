function solution(box, n) {
  return box.reduce((acc,num)=>{
        const count = Math.floor(num/n);
        acc *= count
        return acc
    },1)
}