function solution(s){
    const arr = [...s]
    const open = []
    for(let i = 0 ; i < s.length; i++) {
        if(arr.pop() === ")") {
            open.push("(")
        } else {
            if(open.length <= 0) return false
            open.pop()
        }
    }
    return open.length === 0
}