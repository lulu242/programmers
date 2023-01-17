function solution(my_string, letter) {
    var answer = '';
    answer = [...my_string].filter(el=> el !== letter).join('')
    return answer;
}
