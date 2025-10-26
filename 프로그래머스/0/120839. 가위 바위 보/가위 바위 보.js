const RSP = ['0','5','2','0']
function solution(rsp) {
    const winCase = rsp.split('').map((item)=>{
        return RSP[RSP.indexOf(item)+1]
    })
    return winCase.join('')
}