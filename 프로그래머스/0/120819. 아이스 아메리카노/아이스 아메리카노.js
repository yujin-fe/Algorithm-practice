function solution(money) {
    let cup = 0;
    while((cup+1)*5500<=money){
        cup++
    }
    const change = money - (cup*5500)
    return [cup, change]
}