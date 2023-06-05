function solution(n, words) {
    for(let i = 1; i < words.length; i++){
        const current = words[i]
        const before = words[i - 1]
        if(before.slice(-1) !== current[0] || words.slice(0, i).includes(current)) {
            return [(i+1) % n || n, Math.ceil((i+1) / n)]
        }
    }
 return [0, 0]
}
