function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n*6; i++){
        if(!(i%n)&&!(i%6)){
            answer = i;
            break;
        }
    }  
    return answer/6 ;
}

// n 과 6의 최소공배수
//n*6까지 수중 n과 6으로 가장먼저 나눠지는 수 / 6