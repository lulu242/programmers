function solution(n) {
    var answer = 0;
    let 합성수 = (n) => {
        let result = false
        for(let i = 2; i < n; i++){
            n%i? null: result = true;
            }
        return result
        }
    
    for(let i = 4; i <= n; i++){
        합성수(i)? answer += 1: null;
    }
    return answer
}

//n이하의 합성수 개수
// 4부터 n까지 나눴을 때 나머지가 0인 경우가 없는경우 제외
