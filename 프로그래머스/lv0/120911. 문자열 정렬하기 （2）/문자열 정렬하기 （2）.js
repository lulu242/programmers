function solution(my_string) {
    var answer = '';
    let arr = [...my_string.toLowerCase()]
    answer = arr.sort().join('')
    return answer;
}