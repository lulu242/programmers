function solution(numbers) {
    var answer = 0;
    for(let i = 1; i < 10; i++) {
        numbers.includes(i) ? null : answer += i
    }
    return answer;
}