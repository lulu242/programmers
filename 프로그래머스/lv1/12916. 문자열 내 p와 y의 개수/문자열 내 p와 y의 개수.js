function solution(s){
    s = s.toLowerCase()
    const p = [...s].filter(el => el === 'p').length
    const y = [...s].filter(el => el === 'y').length
    return p === y
}