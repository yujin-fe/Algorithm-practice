function solution(numbers, k) {
    if(numbers.length%2===0){
        const odd = numbers.filter((num)=>num%2!==0)
        const turn = k%odd.length
        return turn===0?odd[odd.length-1]:odd[turn-1]
    }else{
        const odd = numbers.slice().filter((num)=>num%2!==0)
        const even = numbers.slice().filter((num)=>num%2===0)
        const numArr = [...odd,...even]
        const turn = k%numArr.length
        return turn===0?numArr[numArr.length-1]:numArr[turn-1]
    }
    
}