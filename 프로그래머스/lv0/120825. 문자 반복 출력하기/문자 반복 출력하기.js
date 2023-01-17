function solution(my_string, n) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
       answer += my_string[i].repeat(n);
    }
    return answer;
}
// 반복문으로 인덱스 하나씩 n번 repeat추가