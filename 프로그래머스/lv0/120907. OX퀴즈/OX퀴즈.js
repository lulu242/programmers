function solution(quiz) {
    var answer = [];
    for(let el of quiz){
        let arr = el.split(' ')
        if(arr[1] === '+'){
            (+arr[0] + +arr[2]) === +arr[4]?answer.push('O'):answer.push('X')
        } else {
            (+arr[0] - +arr[2]) === +arr[4]?answer.push('O'):answer.push('X')
        }
    }
    return answer;
}