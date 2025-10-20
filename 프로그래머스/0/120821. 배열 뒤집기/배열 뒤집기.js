function solution(num_list) {
    const num_reverse = []
    num_list.map((num)=>num_reverse.unshift(num))
    return num_reverse
}