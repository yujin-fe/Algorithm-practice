function solution(n) {
    let count=0
    for(let i=1; i<=n; i++){
        if(i%2===0){
            count+=i            
        }
    }
    return count;
}
//1. 10이라면.. 10보다 작은 수(1~10)의 배열을 돌면서.. 2부터 10까지 더한다.