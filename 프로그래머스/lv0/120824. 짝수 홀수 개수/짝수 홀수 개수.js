function solution(num_list) {
    var answer = [];
    answer = [num_list.filter(el=> el%2 === 0).length, num_list.filter(el=> el%2 === 1).length]
    return answer;
}