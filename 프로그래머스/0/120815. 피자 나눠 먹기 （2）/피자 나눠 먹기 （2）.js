function solution(n) {
    if(n%6===0){
        return n/6
    }else if(n%2===0){
        return n/2
    }else if(n%3===0){
        return n/3
    }else{
        return n
    }
}