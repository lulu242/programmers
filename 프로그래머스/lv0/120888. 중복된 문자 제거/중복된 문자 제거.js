function solution(my_string) {
    var answer = '';
    let arr = [...my_string]
    answer = arr.reduce(((a, c)=> a.includes(c) ? a : a + c), '')
    return answer;
}

