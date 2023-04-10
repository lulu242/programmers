function solution(s) {
    if(s[0] === '-') {
        return s.slice(1) * -1
    } else {
        return s * 1
    }
}