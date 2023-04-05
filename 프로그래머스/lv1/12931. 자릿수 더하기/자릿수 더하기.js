function solution(n) {
    const str = String(n)
    return [...str].reduce((acc, cur) => acc + cur * 1, 0)
}