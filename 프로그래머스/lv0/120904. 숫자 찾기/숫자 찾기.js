function solution(num, k) {
    var answer = 0;
    answer = [...num.toString()].indexOf((k).toString())
    answer === -1 ? answer: answer++
    return answer;
}