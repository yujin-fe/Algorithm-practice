function solution(num_list) {
    const arr = num_list.reduce((acc,num)=>{
        num%2===0 ? acc[0]++ : acc[1]++
        return acc
    },[0,0])
    
    return arr;
}