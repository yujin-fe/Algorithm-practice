function solution(dot) {
    const 사분면 = {
        "++":1,
        "-+":2,
        "--":3,
        "+-":4
    }
    const spot = dot.map((i)=> i>0 ? "+" : "-").join('')
    return 사분면[spot]
    
}