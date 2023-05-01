function solution(n) {
    var answer = 0;
    answer = [...n.toString(3)].reverse().join('')
    return parseInt(answer, 3)
}