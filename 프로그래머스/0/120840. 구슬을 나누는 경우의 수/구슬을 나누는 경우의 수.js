function solution(balls, share) {
    let permt = 1;
    for(i = balls; i > (balls - share) ; i--){
        permt*=i
    }
    let div = 1;
    for(j = share; j>=1; j--){
        div*=j
    }
    return permt/div
}