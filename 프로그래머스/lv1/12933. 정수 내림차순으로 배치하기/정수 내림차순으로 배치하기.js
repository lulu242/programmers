function solution(n) {
    return [...String(n)].sort((a,b) => Number(b) - Number(a)).join('') * 1
}