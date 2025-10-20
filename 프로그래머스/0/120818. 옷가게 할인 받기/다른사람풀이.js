const discounts = [
    [500000, 20],
    [300000, 10],
    [100000,  5],
]

const solution = (price) => {
    for (const discount of discounts)
        if (price >= discount[0])
            return Math.floor(price - price * discount[1] / 100)
    return price
}
//배열에 정보를 집어넣고 계산을 하나로 통일시키는게 깔끔해보임
