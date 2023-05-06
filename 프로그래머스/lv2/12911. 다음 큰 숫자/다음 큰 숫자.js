function solution(n) {
    const count = [...n.toString(2)].filter(el => el === "1").length
    for(let i = n +1  ;i <= 1000000; i++) {
        if ([...i.toString(2)].filter(el => el === "1").length === count) return i
    }
}