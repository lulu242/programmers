function solution(my_string) {
    var answer = '';
    let arr = [ 'a', 'i', 'o', 'e', 'u']
    answer = [...my_string].filter(el=> !arr.includes(el)).join('')
    return answer;
}