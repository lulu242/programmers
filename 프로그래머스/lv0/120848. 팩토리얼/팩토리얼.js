function solution(n) {
    let factorial = 1;
    for(let i = 1; i<=11; i++){
        if(factorial > n){
            return i -2;
        } else {factorial = factorial * i}
    }
}

// 반복문으로 1부터 곱해가면서 n보다 커지면 n-1