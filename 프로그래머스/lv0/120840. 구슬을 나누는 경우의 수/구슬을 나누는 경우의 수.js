function solution(balls, share) {
    var answer = 0;
    function factorial(n) {
        let fac = 1
        for(let i = 2; i <= n ; i++){
            fac = fac * i;
        }
        return fac;
    } 
    answer = factorial(balls)/factorial(balls-share)/factorial(share)
    return Math.round(answer);
}

// 왜틀린거지지지지지지지