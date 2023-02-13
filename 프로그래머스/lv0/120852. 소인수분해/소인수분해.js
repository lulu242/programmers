function solution(n) {
    var answer = [];

    function div(num, num2) {return num % num2 === 0 ? div(num/num2, num2) : num }
    //나눴을 때 나머지가 0 이 아닐때까지 나눔고 나누 수는 answer에 더하고 나머지는 다음 수로 다시 나누기
    for(let i = 2 ; i <= n ; i++){
        if(div(n, i) !== n){
            answer.push(i);
            n = div(n, i);
        } 
    }
    return answer
}
    
 