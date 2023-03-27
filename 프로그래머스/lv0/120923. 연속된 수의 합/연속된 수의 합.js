function solution(num, total) {
    // 홀수개인 경우 total/num이 중앙값
    // 짝수 개인 경우 total/num이 중앙값의 평균 3.5
    var answer = [];
    const mid = parseInt(total / num)
    answer.push(mid)
    if(num % 2) {
        for(let i = 1; i < num / 2; i++) {
            answer.unshift(mid - i);
            answer.push(mid + i)
        }
    } else {
        answer.push(mid + 1);
        for(let i = 1; i < num / 2; i++) {
            answer.unshift(mid - i);
            answer.push(mid + 1 + i)
        }

    }
    return answer;
}
