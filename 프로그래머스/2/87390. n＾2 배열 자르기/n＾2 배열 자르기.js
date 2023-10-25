function solution(n, left, right) {
    let answer = [];
    let arr = new Array(n).fill(0).map((el,i) => i + 1)
    for(let i = parseInt(left / n) + 1; i <= parseInt(right / n)+1 ; i++) {
        answer = [...answer, ...arr.fill(i, 0, i)]
    }
    return answer.slice(left % n, left % n + right-left + 1)
}

