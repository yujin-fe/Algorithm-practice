function solution(array) {
    const howMany = {};
    array.forEach( i => {
        if(i in howMany){
            howMany[i] += 1
        }else{
            howMany[i]=1
        }
    })
    
    //배열의 value 중 max 값 정하기 
    const max = Math.max(...Object.values(howMany))
    
    //최빈값 중복된 것 -1 리턴하기
    let count = 0;    
    Object.values(howMany).forEach((key)=>{
        if(key===max){
            count++
        }
    })
    if(count>1){
        return -1
    }
    
    //최빈값 찾아서 리턴하기
    for(const num in howMany){
        if(howMany[num]===max){
            return +num  
        }
    }
}