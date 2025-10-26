function solution(hp) {
    const big = Math.floor(hp/5)
    const mid = Math.floor((hp - big*5)/3)
    const sml = hp - big*5 - mid*3
    return big+mid+sml
}