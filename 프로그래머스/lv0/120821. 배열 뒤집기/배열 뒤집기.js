function solution(num_list) {
    var answer = [];
    //반복문으로 el unshift
    for(el of num_list){
        answer.unshift(el)
    }
    return answer;
}