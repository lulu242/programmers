function solution(price) {
    var answer = 0;
    let dc = 1;
    if(price >= 500000){
        dc = 0.8
    } else if(price >= 300000){
        dc = 0.9
    } else if(price >= 100000){
        dc = 0.95
    }
    answer = parseInt(price * dc);
    return answer;
}