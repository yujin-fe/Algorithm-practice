function solution(array) {
    array.sort((a,b)=>a-b)
    const middleIndex = Math.floor(array.length/2)
    const middleValue = array[middleIndex]
    return middleValue
}