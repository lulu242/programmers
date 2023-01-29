function solution(emergency) {
    var answer = [];
    const num = [...emergency];
    num.sort((a, b) => b - a);
    answer = emergency.map((i)=> num.indexOf(i) + 1);
    return answer;
}