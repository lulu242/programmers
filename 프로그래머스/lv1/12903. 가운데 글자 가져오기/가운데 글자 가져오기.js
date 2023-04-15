function solution(s) {
    const half = s.length / 2
    if(s.length % 2 === 0) {
        return s[half-1] + s[half]
    }
    return s[half-0.5]
}