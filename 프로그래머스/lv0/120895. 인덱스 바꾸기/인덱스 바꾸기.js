function solution(my_string, num1, num2) {
    var answer = '';
    let str = [...my_string];
    answer = str.map((el,i)=> i === num1? el = my_string[num2]: i === num2 ? el = my_string[num1]: el).join('')
    return answer;
}
