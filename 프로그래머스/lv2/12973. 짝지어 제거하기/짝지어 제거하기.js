function solution(s) {
    let result = []
    for(let i = 0 ; i < s.length ; i++){
        if(result.length === 0 || s[i] !== result[result.length-1]) {
            result.push(s[i])
        } else {
            result.pop()
        }
    }
    return result.length === 0 ? 1 : 0
}

// 앞에서부터 하나씩 비교하면서 이전것과 같다면 삭제 앞에것도 같이 삭제
