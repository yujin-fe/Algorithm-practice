function solution(my_string, letter) {
    const string = [...my_string]
    const new_arr = string.reduce((acc, word)=>{
        if(word !== letter){
            acc.push(word)
        }
        return acc
    },[])
    return new_arr.join('')
}