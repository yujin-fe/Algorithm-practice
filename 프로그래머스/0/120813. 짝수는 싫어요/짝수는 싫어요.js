function solution(n) {
    const oddNum = [];
    for(i=1; i<=n; i++){
        if(i%2!==0){
        oddNum.push(i)
        }
    }
    return oddNum;
}