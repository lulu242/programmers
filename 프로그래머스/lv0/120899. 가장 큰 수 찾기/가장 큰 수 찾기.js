function solution(array) {
    var answer = [];
    const result = array.reduce((a,c)=> a < c ? a = c: a)
    answer = [result, array.indexOf(result)]
    return answer;
}