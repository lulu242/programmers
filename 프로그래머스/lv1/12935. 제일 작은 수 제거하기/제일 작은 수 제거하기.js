function solution(arr) {
    var answer = [];
    if(arr.length === 1) return [-1]
    return arr.filter(el => el > Math.min(...arr))
    return answer;
}