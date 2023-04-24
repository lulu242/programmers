function solution(s) {
    const arr = s.split(' ').map(el => el * 1)
    return Math.min(...arr) + ' ' + Math.max(...arr)
}