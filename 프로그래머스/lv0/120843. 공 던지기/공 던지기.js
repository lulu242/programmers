function solution(numbers, k) {
    var answer = 1;
    for(let i = 1; i < k ; i++){
        if(answer === numbers.length-1){
            answer = 1;
        } else if(answer === numbers.length){
            answer = 2;
        } else {
            answer += 2
        }
    } 
    return numbers[answer-1];
}