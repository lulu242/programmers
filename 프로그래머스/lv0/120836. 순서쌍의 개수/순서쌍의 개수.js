function solution(n) {
    var answer = 0;
    for(let  i = 1; i <= n; i++){
        n%i === 0 ? answer += 1 : answer;
    }
    return answer;
}

//약수의 수
