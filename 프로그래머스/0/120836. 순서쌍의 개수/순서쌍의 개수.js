function solution(n) {
    let count = 0
    for(let i=1; i<=Math.sqrt(n); i++){
        if(n%i===0){
            count++
        }
    }
    return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? count*2-1 : count*2
}