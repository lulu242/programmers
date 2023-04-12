function solution(arr, divisor) {
    var answer = [];
    for(el of arr) {
        if(el % divisor === 0){
            answer.push(el)
        }
    }
    answer.sort((a, b) => a - b)
    return answer.length === 0 ? [-1] : answer;
}