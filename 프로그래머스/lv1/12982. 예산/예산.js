function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    d.sort((a,b)=> a-b);
    for(let i = 0; i <= d.length ;i++){
        if(sum > budget){
            answer = i-1;
            break;
        } else {
            sum += d[i]
        }
    }
    answer === 0 ? answer = d.length:answer
    d[0] > budget ? answer = 0: answer
    return answer;
}