function solution(polynomial) {
    // 숫자만 배열로
    let arr = polynomial.split(' + ')
    // x가 있는 것과 없는 것 나누기
    let x = arr.filter(el=>el.includes('x'))
    let n = arr.filter(el=> !el.includes('x'))
    //각각 더하기
    x = x.reduce((a, c)=> c==='x'? a + 1 : a + Number(c.slice(0, -1)), 0)
    x === 1 ? x = 'x': x = x + 'x'
    n = n.reduce((a, c)=> a + Number(c), 0)
    if(x === '0x'){
        return String(n)
    } else if (n === 0) {
        return x
    }else {
        return x + ' + ' + n
    }  
}