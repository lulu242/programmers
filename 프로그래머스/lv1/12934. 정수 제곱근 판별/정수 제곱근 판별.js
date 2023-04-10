function solution(n) {
    const m = Math.sqrt(n)
    return m % 1 === 0 ? (m + 1)*(m + 1) : -1
}