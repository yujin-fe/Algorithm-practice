function solution(n) {
    if(n<3) return 0
    let prime_count = 0
    for(i=4; i<=n; i++){
        if((
            i%2!==0 && 
            i%3!==0 && 
            i%5!==0 && 
            i%7!==0
        ) || 
           i===5 ||
           i===7
          ){
            prime_count++
        }
    }
    return n-prime_count-3
}